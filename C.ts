import inquirer from "inquirer";
import chalk from "chalk"
import chalkanimation from "chalk-animation"
import figlet from "figlet";

import { UAED,USD,INR,EURO } from "./index.js";

// console.log(UAED(2));
// console.log(USD(2));
// console.log(INR(2));
// console.log(EURO(2));

const Converter = async () => {
    console.log(figlet.textSync("Currency Converter"));
    

let input = await inquirer.prompt([
    {
        name:"Converter",
        type:"number",
        massage:"Enter Value",
    },
    {
        type:"list",
        name:"Currancy",
        massage:"Select Currancy",
        choices:["USD","UAED","INR","EURO"]
    }
])


if (input.Currancy === "USD") {
    let result = USD(input.Converter)
    console.log(chalk.blue((result)+"PKR"));
    
}else if (input.Currancy === "UAED") {
    let result = UAED(input.Converter)
    console.log(chalk.green((result)+"PKR"));
    
}else if (input.Currancy === "INR") {
    let result = INR(input.Converter)
    console.log(chalk.red((result)+"PKR"));

}else if (input.Currancy === "EURO") {
    let result = EURO(input.Converter)
    console.log(chalk.grey((result)+"PKR"));
};
}
Converter();



