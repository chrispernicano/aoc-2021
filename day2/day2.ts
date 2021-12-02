import * as readline from 'readline';
import * as fs from 'fs';
import * as path from 'path';


 async function day2()  {
    
    const directions = readline.createInterface({input: fs.createReadStream(path.resolve('./day2/input.txt'))});
    var total_distance = 0
    var depth = 0
    var aim = 0
    for await (const line of directions) {
        var direction=line.split(' ')[0];
        var distance_str=line.split(' ')[1];
        var distance_num: number = +distance_str;
        if (direction === 'forward') {
            console.log('moving forward...')
            console.log(`current aim: ${aim}`)
            total_distance+=distance_num
            depth += (aim*distance_num)
            console.log(`horizontal distance travelled: ${total_distance}`)
            console.log(`current depth: ${depth}`)
        } else if (direction === 'up') {
            aim -=distance_num
        } else if (direction === 'down') {
            aim += distance_num
        } else {
            console.log('invalid data')
        }
    directions.close();
    }
    console.log(`final answer: ${total_distance} * ${depth} = ${total_distance*depth}`)
}

day2();