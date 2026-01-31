import { readFileSync, writeFileSync } from 'fs';

// Read the corrupted file as buffer
const seqBuffer = readFileSync('d:/demo/nguphaptienganh/src/data/topics/sequenceOfTenses.js');
const svaBuffer = readFileSync('d:/demo/nguphaptienganh/src/data/topics/subjectVerbAgreement.js');

// Try to decode as latin1 first, then re-encode as UTF-8
const seqText = seqBuffer.toString('latin1');
const svaText = svaBuffer.toString('latin1');

// Write back as UTF-8
writeFileSync('d:/demo/nguphaptienganh/src/data/topics/sequenceOfTenses.js', seqText, 'utf8');
writeFileSync('d:/demo/nguphaptienganh/src/data/topics/subjectVerbAgreement.js', svaText, 'utf8');

console.log('Fixed encoding for both files');
