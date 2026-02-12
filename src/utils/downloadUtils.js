import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import "jspdf-autotable";

// Use a single, reliable source for a standard Unicode font (Roboto Regular)
// We will use this ONE font for everything in PDF to ensure characters render.
const FONT_URL = "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf";

const loadFont = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const blob = await response.blob();
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
                const base64 = reader.result.split(',')[1];
                resolve(base64);
            };
            reader.readAsDataURL(blob);
        });
    } catch (e) {
        console.error("Failed to load font from " + url, e);
        return null;
    }
};

const cleanText = (input) => {
    if (input === null || input === undefined) return "";
    let text = String(input);

    // Remove HTML
    text = text.replace(/<[^>]*>/g, "");

    // Normalize newlines
    text = text.replace(/\\n/g, "\n"); // Handle literal \n if present
    text = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

    // Replace tabs with space
    text = text.replace(/\t/g, " ");

    // Replace multiple spaces (excluding newlines)
    text = text.replace(/ +/g, " ");

    // Ensure no more than 2 consecutive newlines
    text = text.replace(/\n{3,}/g, "\n\n");

    return text.trim();
};

const getDownloadData = (topic) => {
    let sectionsData = [];
    if (topic && topic.children) {
        topic.children.forEach(child => {
            if (child.sections) {
                child.sections.forEach(section => {
                    // Handle Exercises
                    if (section.type === 'exercise' && section.questions && section.questions.length > 0) {
                        sectionsData.push({
                            type: 'exercise',
                            title: cleanText(child.title),
                            subtitle: cleanText(section.subtitle || section.title),
                            questions: section.questions
                        });
                    }
                    // Handle Theory (custom) - content can be Array or String
                    else if (section.type === 'custom' && section.content && (section.content.length > 0 || typeof section.content === 'string')) {
                        sectionsData.push({
                            type: 'theory',
                            title: cleanText(child.title),
                            subtitle: cleanText(section.subtitle || section.title),
                            content: section.content
                        });
                    }
                    // Handle 'theory' type directly if used
                    else if (section.type === 'theory' && section.content) {
                        sectionsData.push({
                            type: 'theory',
                            title: cleanText(child.title),
                            subtitle: cleanText(section.subtitle || section.title),
                            content: section.content
                        });
                    }
                });
            }
        });
    }
    return sectionsData;
};

export const downloadTopic = async (topic, format) => {
    try {
        const data = getDownloadData(topic);
        if (data.length === 0) {
            alert("Không có dữ liệu để tải xuống.");
            return;
        }

        if (format === 'docx') {
            await generateDocxSafe(topic, data);
        } else if (format === 'pdf') {
            await generatePdfSafe(topic, data);
        }
    } catch (error) {
        console.error("Download failed:", error);
        alert("Có lỗi xảy ra: " + error.message);
    }
};

const createMultilineTextRuns = (text, options = {}) => {
    const lines = text.split('\n');
    return lines.map((line, i) => new TextRun({
        text: line,
        break: i > 0 ? 1 : 0,
        ...options
    }));
};

const generateDocxSafe = async (topic, sections) => {
    const children = [];

    // Doc Title
    children.push(new Paragraph({
        children: [
            new TextRun({
                text: cleanText(topic.title),
                bold: true,
                size: 32 // 16pt 
            })
        ]
    }));
    children.push(new Paragraph({ children: [new TextRun("")] }));

    sections.forEach((section, index) => {
        // Section Title
        let paragraphOptions = {
            children: [
                new TextRun({
                    text: section.title, // already cleaned
                    bold: true,
                    size: 28 // 14pt
                })
            ],
            spacing: { before: 200 }
        };

        // Add page break before subsequent sections
        if (index > 0) {
            paragraphOptions.pageBreakBefore = true;
        }

        children.push(new Paragraph(paragraphOptions));

        // Subtitle (if different/exists)
        if (section.subtitle && section.subtitle !== section.title) {
            children.push(new Paragraph({
                children: [
                    new TextRun({
                        text: section.subtitle,
                        bold: true,
                        size: 24, // 12pt
                        italics: true
                    })
                ]
            }));
        }

        if (section.type === 'theory') {
            if (Array.isArray(section.content)) {
                section.content.forEach(contentItem => {
                    if (contentItem.subtitle) {
                        children.push(new Paragraph({
                            children: [new TextRun({ text: cleanText(contentItem.subtitle), bold: true, size: 24 })],
                            spacing: { before: 100 }
                        }));
                    }

                    if (contentItem.cases) {
                        contentItem.cases.forEach(c => {
                            const cellChildren = [];
                            if (c.label) {
                                cellChildren.push(new TextRun({ text: cleanText(c.label) + ": ", bold: true }));
                            }
                            if (c.formula) {
                                // Handle multiline formula
                                const formulaText = cleanText(c.formula);
                                const runs = createMultilineTextRuns(formulaText);
                                cellChildren.push(...runs);
                            }

                            children.push(new Paragraph({
                                children: cellChildren,
                                spacing: { after: 100 }
                            }));
                        });
                    }
                });
            } else if (typeof section.content === 'string') {
                // Handle string content
                const text = cleanText(section.content);
                const runs = createMultilineTextRuns(text);
                children.push(new Paragraph({
                    children: runs,
                    spacing: { before: 100, after: 100 }
                }));
            }
        }
        else if (section.type === 'exercise') {
            section.questions.forEach(q => {
                // Question
                const qText = `Question ${q.id}: ${cleanText(q.text)}`;
                children.push(new Paragraph({
                    children: [
                        ...createMultilineTextRuns(qText, { bold: q.id.toString() === "Question" ? true : false }) // Simple bolding logic might need improvement
                    ],
                    spacing: { before: 100 }
                }));

                // Options
                if (q.options) {
                    q.options.forEach((opt, idx) => {
                        const letter = String.fromCharCode(65 + idx);
                        children.push(new Paragraph({
                            children: [
                                new TextRun(`   ${letter}. ${cleanText(opt)}`)
                            ]
                        }));
                    });
                }
                // children.push(new Paragraph({ children: [new TextRun("")] })); // Spacing is handled by spacing.before/after
            });
        }
    });

    // Answer Key
    children.push(new Paragraph({
        children: [
            new TextRun({
                text: "--- ANSWER KEY / ĐÁP ÁN ---",
                bold: true,
                size: 28
            })
        ],
        spacing: { before: 400 },
        pageBreakBefore: true // Always start answer key on new page
    }));

    // Only print keys for exercises
    sections.filter(s => s.type === 'exercise').forEach(ex => {
        children.push(new Paragraph({
            children: [new TextRun({ text: ex.title, bold: true })]
        }));

        const answers = ex.questions.map(q => `${q.id}. ${cleanText(q.answer)}`);
        // Join with spacing, but text runs don't handle newlines well unless we use createMultilineTextRuns if answer has newlines?
        // Answers are usually short.
        children.push(new Paragraph({
            children: [new TextRun(answers.join("   |   "))]
        }));

        children.push(new Paragraph({ children: [new TextRun("")] }));
    });

    const doc = new Document({
        sections: [{
            properties: {},
            children: children
        }]
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `Tai_lieu_${topic.id}.docx`);
};

const generatePdfSafe = async (topic, sections) => {
    const doc = new jsPDF();

    // Load ONE font and use it for EVERYTHING.
    const fontBase64 = await loadFont(FONT_URL);

    if (fontBase64) {
        doc.addFileToVFS("Roboto-Regular.ttf", fontBase64);
        doc.addFont("Roboto-Regular.ttf", "Roboto", "normal");
        doc.addFont("Roboto-Regular.ttf", "Roboto", "bold");
        doc.setFont("Roboto", "normal");
    } else {
        doc.setFont("times", "normal");
    }

    let y = 20;
    const margin = 15;
    const pageWidth = doc.internal.pageSize.getWidth();
    const contentWidth = pageWidth - (margin * 2);

    const checkPageBreak = (heightAdd = 10) => {
        if (y + heightAdd > 280) {
            doc.addPage();
            y = 20;
            return true;
        }
        return false;
    };

    const printText = (text, x, yPos, options = {}) => {
        // splitTextToSize handles newlines correctly if they are \n
        const lines = doc.splitTextToSize(text, options.maxWidth || contentWidth);
        const lineHeight = 6; // slightly larger than 5

        // If the whole block fits, print it. If not, we might need to split or page break.
        if (yPos + (lines.length * lineHeight) > 280) {
            doc.addPage();
            yPos = 20;
        }

        doc.text(lines, x, yPos, options);
        return yPos + (lines.length * lineHeight);
    };

    // Global Title
    doc.setFontSize(16);
    doc.setFont(undefined, 'bold');
    y = printText(cleanText(topic.title), pageWidth / 2, y, { align: 'center' });
    y += 10;

    doc.setFontSize(11);

    sections.forEach((section, index) => {
        // Force new page for subsequent sections
        if (index > 0) {
            doc.addPage();
            y = 20;
        }

        checkPageBreak(20);
        doc.setFont(undefined, 'bold');
        y = printText(section.title, margin, y, { maxWidth: contentWidth });
        y += 2;

        if (section.subtitle && section.subtitle !== section.title) {
            doc.setFont(undefined, 'normal'); // fallback for italic
            y = printText(section.subtitle, margin, y, { maxWidth: contentWidth });
            y += 5;
        }

        if (section.type === 'theory') {
            doc.setFont(undefined, 'normal');
            if (Array.isArray(section.content)) {
                section.content.forEach(item => {
                    checkPageBreak(10);
                    if (item.subtitle) {
                        doc.setFont(undefined, 'bold');
                        y = printText(cleanText(item.subtitle), margin, y, { maxWidth: contentWidth });
                        y += 3;
                    }

                    doc.setFont(undefined, 'normal');
                    if (item.cases) {
                        item.cases.forEach(c => {
                            let text = "";
                            if (c.label) text += cleanText(c.label) + ": ";
                            if (c.formula) text += cleanText(c.formula);

                            // Increase y slightly before each case
                            y = printText(text, margin + 5, y, { maxWidth: contentWidth - 5 });
                            y += 3;
                        });
                    }
                    y += 5;
                });
            } else if (typeof section.content === 'string') {
                // Handle string content for simple theory text
                checkPageBreak(10);
                doc.setFont(undefined, 'normal');
                const text = cleanText(section.content);
                y = printText(text, margin, y, { maxWidth: contentWidth });
                y += 5;
            }
        }
        else if (section.type === 'exercise') {
            section.questions.forEach(q => {
                checkPageBreak(15);
                doc.setFont(undefined, 'normal'); // Reset

                const qText = `Question ${q.id}: ${cleanText(q.text)}`;
                y = printText(qText, margin, y, { maxWidth: contentWidth });
                y += 2;

                if (q.options) {
                    q.options.forEach((opt, i) => {
                        checkPageBreak(10);
                        const letter = String.fromCharCode(65 + i);
                        const optText = `${letter}. ${cleanText(opt)}`;
                        y = printText(optText, margin + 5, y, { maxWidth: contentWidth - 5 });
                        y += 2;
                    });
                }
                y += 5;
            });
        }
        y += 5;
    });

    // Answer Key
    doc.addPage();
    y = 20;
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text("ANSWER KEY / ĐÁP ÁN", pageWidth / 2, y, { align: 'center' });
    y += 15;

    doc.setFontSize(11);
    sections.filter(s => s.type === 'exercise').forEach(ex => {
        checkPageBreak(20);
        doc.setFont(undefined, 'bold');
        doc.text(cleanText(ex.title), margin, y);
        y += 7;
        doc.setFont(undefined, 'normal');

        const ansList = ex.questions.map(q => `${q.id}. ${cleanText(q.answer)}`);
        const textBlob = ansList.join("   |   ");
        y = printText(textBlob, margin, y, { maxWidth: contentWidth });
        y += 10;
    });

    doc.save(`${topic.id}_document.pdf`);
};
