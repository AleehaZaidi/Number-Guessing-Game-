"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const systemGernatedNo = Math.floor(Math.random() * 100);
console.log(systemGernatedNo);
const answer = inquirer_1.default.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your guess:"
    }
]);
console.log(answer.userGuess);
