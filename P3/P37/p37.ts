import * as fs from 'fs';
import * as path from 'path';

function insertionSort(words: string[]): string[] {
    for (let i = 1; i < words.length; i++) {
        let key = words[i];
        let j = i - 1;
        while (j >= 0 && words[j] > key) {
            words[j + 1] = words[j];
            j = j - 1;
        }
        words[j + 1] = key;
    }
    return words;
}

function readFile(filePath: string): string[] {
    const text = fs.readFileSync(filePath, 'utf-8');
    const words = text.split(/\s+/);
    return words;
}

function writeFile(filePath: string, words: string[]): void {
    const data = words.join('\n');
    fs.writeFileSync(filePath, data, 'utf-8');
}

function main() {
    const inputFilePath = 'input.txt';
    const words = readFile(inputFilePath);
    const sortedWords = insertionSort(words);
    const outputFilePath = path.basename(inputFilePath, '.txt') + '_ord.txt';
    writeFile(outputFilePath, sortedWords);
    console.log(`Palavras ordenadas foram escritas no arquivo: ${outputFilePath}`);
}

main();