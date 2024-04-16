#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 100000; //Rupees
let myPinCode = 4477;
console.log(chalk.bgRgb(105, 105, 115).bold.whiteBright("\n\t\t\t\t\t ***   ATM-MACHINE   *** \t\t\t\t\t\n"));
let pinAnswer = await inquirer.prompt([
    {
        type: "number",
        name: "PIN",
        message: "Enter your pin: "
    }
]);
if (pinAnswer.PIN === myPinCode) {
    console.log(chalk.greenBright.bold("\nPin entered is CORRECT\n"));
    let atmOperation = await inquirer.prompt([
        {
            type: "list",
            name: "Operation",
            message: "Please select one of the operation:",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);
    if (atmOperation.Operation === "Withdraw") {
        let WithdrawalAmount = await inquirer.prompt([
            {
                type: "list",
                name: "Amount",
                message: "How much amount do you want to withdraw?",
                choices: [5000, 10000, 15000, "Other Amount"]
            }
        ]);
        if (WithdrawalAmount.Amount === "Other Amount") {
            let otherAmount = await inquirer.prompt([
                {
                    type: "number",
                    name: "amount",
                    message: "Enter Amount:"
                }
            ]);
            if (otherAmount.amount > myBalance) {
                console.log(chalk.red.bold("\nINSUFFICIENT BALANCE!!"));
            }
            else {
                console.log(chalk.greenBright.bold(`\nYour remaining Account Balance is Rs.${myBalance - otherAmount.amount}/-`));
            }
            ;
        }
        else {
            console.log(chalk.greenBright.bold(`\nYour remaining Account Balance is Rs.${myBalance - WithdrawalAmount.Amount}/-`));
        }
        ;
    }
    else {
        console.log(chalk.greenBright.bold(`\nYour Account's Current Balance is Rs.${myBalance}/-`));
    }
    ;
}
else {
    console.log(chalk.red.bold("\nPin entered is INCORRECT\n"));
}
;
