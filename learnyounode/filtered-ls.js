const fs = require('fs')
const path = require('path')

const directory = process.argv[2]
const extention = process.argv[3]

fs.readdir(directory, (error, files) => {
    if(error)
        throw error

    if(extention != undefined || extention != null)
        files = files.filter((file) => path.extname(file) == '.' + extention)

    files.forEach(element => console.log(element));
})
