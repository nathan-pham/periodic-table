import * as readline from "readline";

const prompt = (message) =>
    new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question(message, (data) => {
            rl.close();
            resolve(data);
        });
    });

export default prompt;
