const fs = require('fs')

exports.createJSON = function(dir, json) {
    fs.writeFile(dir, JSON.stringify(json), function(err) {
        if (err) throw err;
    })
}