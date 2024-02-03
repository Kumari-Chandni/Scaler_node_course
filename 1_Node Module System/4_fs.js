//files

const fs = require("fs")

// //reading a file

// let fileContent = fs.readFileSync('f1.txt')

// console.log('data of file 1-> ' + fileContent)

// //writing in a file
// fs.writeFileSync('f2.txt', ' Hi! This is file 2')

// console.log('File has been written')

// //append a file

// fs.appendFileSync('f3.txt', ' This is updated data')
// console.log('File has been appended')

// //delete the file
// fs.unlinkSync('f1.txt')

// console.log('file hs been deleted')

//Directories

//create a directory

// fs.mkdirSync('myDirectory')

//check the content inside the the directory

let folderPath= 'C:\\Users\\Kumari Chandni\\Desktop\\THE ULTIMATE NODE COURSE\\1_Node Module System\\myDirectory'

let folderContent = fs.readdirSync(folderPath)
console.log('Folder Content', folderContent)

//check whether the directory or not

let doesExist = fs.existsSync('myDirectory')
console.log(doesExist)

//delete a directory

fs.rmdirSync('myDirectory')

console.log('file has been deleted')
