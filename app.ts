
import inquirer from "inquirer";
import chalk from "chalk";
let traffic_signals = await inquirer.prompt([
  {
    name:"Operator",
    message:"Please Select Color & see Traffic Rules",
    type:"list",
    choices:["Red","Yellow","Green"]
  }
]);
if (traffic_signals.Operator==="Red"){
  console.log(chalk.bold.red("Red Color\nindicate to drivers to stop your vehicle"));
  
} else if (traffic_signals.Operator==="Yellow"){
  console.log(chalk.bold.yellow("Yellow Color\nindicate to Drivers to Stop Your Vehicle its a safe to"));
  
} else if (traffic_signals.Operator==="Green"){
  console.log(chalk.bold.green("Green Color\nindicate to drivers can start your vehicle & keep Driving"));
  
}