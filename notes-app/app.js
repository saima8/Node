// const fs = require('fs')
// fs.writeFileSync('notes.txt','My name is Saima Khan. I am a Software Engineer.')

// fs.appendFileSync('notes.txt','My initial salary should be 30k to 40k')
// const name = require ('./utils.js')
// const add = require ('./utils.js')
// const sum = add(4,5)
// // console.log(name)
// console.log(sum);

// const validator = require ('validator')



// console.log(chalk.green.bold.underline.inverse('Success!'))
// console.log(chalk.blue.bold.inverse('You can do it!'))

// const lekha = notes();

// console.log(lekha)
// // console.log(validator.isEmail('example.com'))
// // console.log(validator.isURL('https/google.com'))
// console.log(process.argv[2])
const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes')
// customize yargs version

yargs.version('1.1.0')
yargs.command ({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'New notes',
            demandOption: false,
            type: 'string'
        },
        body: {
            describe: 'Add body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNotes(argv.title, argv.body)
    }
})
// create remove command
yargs.command ({
    command: 'remove',
    describe: 'removing a note',
    handler: function (){
        console.log('a note is removed')
    }
})
//create list command 
yargs.command({
    command: 'list',
    describe: 'listing the nodes',
    handler: function (){
        console.log('List the notes')
    }
})
//create read command
yargs.command({
    command:'read',
    describe:'Reading the lists',
    
    handler: function(){
        console.log('Read the notes')
    }
})
// console.log(yargs.argv)

yargs.parse()

