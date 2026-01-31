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
    // Replace multiple spaces
    text = text.replace(/\s+/g, " ");
    return text.trim();
};

const getAllQuestions = (topic) => {
    let sectionsData = [];
    if (topic && topic.children) {
        topic.children.forEach(child => {
            if (child.sections) {
                child.sections.forEach(section => {
                    if (section.type === 'exercise' && section.questions && section.questions.length > 0) {
                        sectionsData.push({
                            title: cleanText(child.title),
                            subtitle: cleanText(section.subtitle || section.title),
                            questions: section.questions
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
        if (format === 'docx') {
            await generateDocxSafe(topic);
        } else if (format === 'pdf') {
            await generatePdfSafe(topic);
        }
    } catch (error) {
        console.error("Download failed:", error);
        alert("Có lỗi xảy ra: " + error.message);
    }
};

const generateDocxSafe = async (topic) => {
    const exercises = getAllQuestions(topic);
    if (exercises.length === 0) {
        alert("Không có bài tập để tải xuống.");
        return;
    }

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

    exercises.forEach(ex => {
        // Section Title
        children.push(new Paragraph({
            children: [
                new TextRun({
                    text: ex.title,
                    bold: true,
                    size: 28 // 14pt
                })
            ]
        }));

        ex.questions.forEach(q => {
            // Question
            children.push(new Paragraph({
                children: [
                    new TextRun({ text: `Question ${q.id}: `, bold: true }),
                    new TextRun(cleanText(q.text))
                ]
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
            children.push(new Paragraph({ children: [new TextRun("")] }));
        });
    });

    // Answer Key
    children.push(new Paragraph({
        children: [
            new TextRun({
                text: "--- ANSWER KEY / ĐÁP ÁN ---",
                bold: true,
                size: 28
            })
        ]
    }));

    exercises.forEach(ex => {
        children.push(new Paragraph({
            children: [new TextRun({ text: ex.title, bold: true })]
        }));

        const answers = ex.questions.map(q => `${q.id}. ${cleanText(q.answer)}`);
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
    saveAs(blob, `Bai_tap_${topic.id}.docx`);
};

const generatePdfSafe = async (topic) => {
    const exercises = getAllQuestions(topic);
    if (!exercises.length) return;

    const doc = new jsPDF();

    // Load ONE font and use it for EVERYTHING.
    // This avoids issues where Bold font is missing glyphs or fails to load.
    const fontBase64 = await loadFont(FONT_URL);

    if (fontBase64) {
        doc.addFileToVFS("Roboto-Regular.ttf", fontBase64);
        doc.addFont("Roboto-Regular.ttf", "Roboto", "normal");
        // We register the SAME regular font as 'bold' so standard calls don't crash
        doc.addFont("Roboto-Regular.ttf", "Roboto", "bold");
        doc.setFont("Roboto", "normal");
    } else {
        // Fallback (might have issues with VN)
        doc.setFont("times", "normal");
    }

    let y = 20;
    const margin = 15;
    const pageWidth = doc.internal.pageSize.getWidth();
    const contentWidth = pageWidth - (margin * 2);

    // Title
    doc.setFontSize(16);
    // Even if we set bold, it uses the Regular font file (mapped above), ensuring chars exist.
    // It just won't look "thick", but it will be readable.
    doc.setFont(undefined, 'bold');
    doc.text(cleanText(topic.title), pageWidth / 2, y, { align: 'center', maxWidth: contentWidth });
    y += 15;

    doc.setFontSize(11);

    exercises.forEach(ex => {
        if (y > 270) { doc.addPage(); y = 20; }

        doc.setFont(undefined, 'bold');
        doc.text(cleanText(ex.title), margin, y, { maxWidth: contentWidth });
        y += 7;

        doc.setFont(undefined, 'normal');
        ex.questions.forEach(q => {
            if (y > 270) { doc.addPage(); y = 20; }

            const qText = `Question ${q.id}: ${cleanText(q.text)}`;
            const splitText = doc.splitTextToSize(qText, contentWidth);
            doc.text(splitText, margin, y);
            y += (splitText.length * 5) + 2;

            if (q.options) {
                q.options.forEach((opt, i) => {
                    if (y > 280) { doc.addPage(); y = 20; }
                    const letter = String.fromCharCode(65 + i);
                    const optText = `${letter}. ${cleanText(opt)}`;
                    doc.text(optText, margin + 5, y, { maxWidth: contentWidth - 5 });
                    y += 5;
                });
                y += 3;
            }
            y += 2;
        });
        y += 5;
    });

    doc.addPage();
    y = 20;
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text("ANSWER KEY / ĐÁP ÁN", pageWidth / 2, y, { align: 'center' });
    y += 15;

    doc.setFontSize(11);
    exercises.forEach(ex => {
        if (y > 270) { doc.addPage(); y = 20; }
        doc.setFont(undefined, 'bold');
        doc.text(cleanText(ex.title), margin, y);
        y += 7;
        doc.setFont(undefined, 'normal');

        const ansList = ex.questions.map(q => `${q.id}. ${cleanText(q.answer)}`);
        const textBlob = ansList.join("   |   ");
        const lines = doc.splitTextToSize(textBlob, contentWidth);
        doc.text(lines, margin, y);
        y += (lines.length * 5) + 10;
    });

    doc.save(`${topic.id}_exercises.pdf`);
};
