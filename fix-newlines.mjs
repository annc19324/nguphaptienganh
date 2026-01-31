import { readFileSync, writeFileSync } from 'fs';

const file = 'd:/demo/nguphaptienganh/src/data/topics/subjectVerbAgreement.js';
let content = readFileSync(file, 'utf8');

// Replace \\n with actual newline
content = content.replace(/\\\\n/g, '\n');

writeFileSync(file, content, 'utf8');
console.log('Fixed subjectVerbAgreement.js');
