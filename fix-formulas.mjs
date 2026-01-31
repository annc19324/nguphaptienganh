import { readFileSync, writeFileSync } from 'fs';

const files = [
    'd:/demo/nguphaptienganh/src/data/topics/sequenceOfTenses.js',
    'd:/demo/nguphaptienganh/src/data/topics/subjectVerbAgreement.js'
];

files.forEach(file => {
    let content = readFileSync(file, 'utf8');

    // Find all formula: '...' patterns and replace actual newlines with \n
    content = content.replace(/formula: '([^']*)'/g, (match, p1) => {
        // Replace actual newlines with \n escape sequence
        const fixed = p1.replace(/\n/g, '\\n');
        return `formula: '${fixed}'`;
    });

    writeFileSync(file, content, 'utf8');
    console.log(`Fixed ${file}`);
});
