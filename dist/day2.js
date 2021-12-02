"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
async function day2() {
    const directions = readline.createInterface({ input: fs.createReadStream(path.resolve('./day2/input.txt')) });
    var total_distance = 0;
    var depth = 0;
    var aim = 0;
    for await (const line of directions) {
        var direction = line.split(' ')[0];
        var distance_str = line.split(' ')[1];
        var distance_num = +distance_str;
        if (direction === 'forward') {
            console.log('moving forward...');
            console.log(`current aim: ${aim}`);
            total_distance += distance_num;
            depth += (aim * distance_num);
            console.log(`horizontal distance travelled: ${total_distance}`);
            console.log(`current depth: ${depth}`);
        }
        else if (direction === 'up') {
            aim -= distance_num;
            // console.log(`current depth: ${depth}`)
            // console.log(`current aim: ${aim}`)
        }
        else if (direction === 'down') {
            aim += distance_num;
            // console.log(`current depth: ${depth}`)
            // console.log(`current aim: ${aim}`)
        }
        else {
            console.log('invalid data');
        }
        directions.close();
    }
    console.log(`final answer: ${total_distance} * ${depth} = ${total_distance * depth}`);
}
day2();
