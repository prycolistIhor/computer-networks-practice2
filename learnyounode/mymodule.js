const fs = require('fs')
const path = require('path')

module.exports = function(directory, extention, callback) {
    fs.readdir(directory, (error, files) => {
        if (error)
            return callback(error)

        if (extention != undefined || extention != null)
            files = files.filter((file) => path.extname(file) == '.' + extention)

        callback(null, files)
    })
}
