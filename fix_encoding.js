import fs from 'fs';

const files = [
    'd:/demo/nguphaptienganh/src/data/topics/sequenceOfTenses.js',
    'd:/demo/nguphaptienganh/src/data/topics/subjectVerbAgreement.js'
];

files.forEach(file => {
    try {
        // Read buffer to detect BOM? Node handles BOM usually.
        const content = fs.readFileSync(file, 'utf8');
        console.log(`Read ${file}, length: ${content.length}`);
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed ${file}`);
    } catch (err) {
        console.error(`Error processing ${file}:`, err);
    }
});
