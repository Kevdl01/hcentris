const fs = require('fs')
const path = require('path')

exports.createJSON = function(dir, json) {
    fs.writeFile(dir, JSON.stringify(json), function(err) {
        if (err) throw err;
    })
}

const createDir = function(dir) {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}

exports.concatenateJSON = (dir, jsonFileName) => {
    let files, content = null
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            createDir(path.resolve(process.env.NODE_PATH) + '/dist')
            content = []
            files = fs.readdirSync(dir)
                .filter(name => path.extname(name) === '.json')
                .map(name => path.join(dir, name))

                if (files.length === 0) { return reject(new Error(`directory ${files} is empty`)) }
        
                files.forEach(file => {
                    fs.readFile(`${file}`, 'utf-8', function(err, data) {
                        content.push(data)
                        fs.writeFileSync(path.resolve(process.env.NODE_PATH) + `/dist/${jsonFileName}.json`, JSON.stringify(content));
                    })
                })

                return resolve({ 'files': files })
        }, 8000)
    })
}