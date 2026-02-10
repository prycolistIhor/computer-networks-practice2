const fs = require('fs')

fs.readFile(process.argv[2], { encoding: 'utf8', flag: 'r' }, (error, file) => {
    if(error)
        throw error

    const lines = file.split('\n').length - 1
    console.log(lines)
})
