// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const getTemplate = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Project title',
        name: 'title',
        validate:(value)=> { if(value){return true}else{return "need a response"} }
      },
      {
        type: 'input',
        message: 'What motivated you to build this project?',
        name: 'motivation',
        validate:(value)=> { if(value){return true}else{return "need a response"} }
      },
      {
        type: 'input',
        message: 'What is the reason behind building this project?',
        name: 'reason',
        validate:(value)=> { if(value){return true}else{return "need a response"} }
      },
      {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'problemSolve',
        validate:(value)=> { if(value){return true}else{return "need a response"} }
      },
      {
        type: 'input',
        message: 'What are the step to install your application?',
        name: 'installation',
        validate:(value)=> { if(value){return true}else{return "need a response"} }
      },
      {
        type: 'input',
        message: 'How to use your application?',
        name: 'usage',
        validate:(value)=> { if(value){return true}else{return "need a response"} }
      },
      {
        type: 'list',
        message: 'What is the license used',
        choices:['MIT License','Eclipse Public License','Apache License','IBM License','N/A'],
        name: 'license',
        validate:(value)=> { if(value){return true}else{return "need a response"} }
      },

      {
        type: 'input',
        message: 'Credits to mention?',
        name: 'credit',
        validate:(value)=> { if(value){return true}else{return "need a response"} }
      },
      {
        type: 'input',
        message: 'Contributors fro this project?',
        name: 'contributor',
        validate:(value)=> { if(value){return true}else{return "need a response"} }
      },
      { 
        type: 'input',
        message: 'What are the Test instructions?',
        name: 'test',
        validate:(value)=> { if(value){return true}else{return "need a response"} }
      },
      
      {
        type: 'input',
        message: 'what is your username on Github?',
        name: 'username',
        validate:(value)=> { if(value){return true}else{return "need a response"} }
      },
      {
        type: 'input',
        message: 'what is your email address?',
        name: 'email',
        validate:(value)=> { if(value){return true}else{return "need a response to continue"} }
      },
      
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFile(fileName,data ,(err) =>
        err? console.error(err):console.log("Your README file has been created Successfully")
        )}

// TODO: Create a function to initialize app
function init() {
      inquirer.prompt(questions)
               .then(function (data) {
                 console.log(data.title)
           writeToFile('./result/README.md',getTemplate(data))
        }
    )
}

// Function call to initialize app
init();
