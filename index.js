import chalk from "chalk";

console.log(chalk.blue("Michel"));
console.log(chalk.green("Géraldine"));
console.log(chalk.red.underline("Malachai"));
console.log(chalk.yellow("Bergeline"));

const student = "Thomas";
console.log(chalk.bgRed(`Hello ${student}`));
