"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
function insertionSort(words) {
    for (var i = 1; i < words.length; i++) {
        var key = words[i];
        var j = i - 1;
        while (j >= 0 && words[j] > key) {
            words[j + 1] = words[j];
            j = j - 1;
        }
        words[j + 1] = key;
    }
    return words;
}
function readFile(filePath) {
    var text = fs.readFileSync(filePath, 'utf-8');
    var words = text.split(/\s+/);
    return words;
}
function writeFile(filePath, words) {
    var data = words.join('\n');
    fs.writeFileSync(filePath, data, 'utf-8');
}
function main() {
    var inputFilePath = 'input.txt';
    var words = readFile(inputFilePath);
    var sortedWords = insertionSort(words);
    var outputFilePath = path.basename(inputFilePath, '.txt') + '_ord.txt';
    writeFile(outputFilePath, sortedWords);
    console.log("Palavras ordenadas foram escritas no arquivo: ".concat(outputFilePath));
}
main();
