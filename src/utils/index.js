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

exports.concatenateJSON = function(dir) {
    createDir(path.resolve(process.env.NODE_PATH) + '/dist')
    let content = []
    const files = fs.readdirSync(dir)
        .filter(name => path.extname(name) === '.json')
        .map(name => path.join(dir, name))
    
    files.forEach(file => {
        fs.readFile(`${file}`, 'utf-8', function(err, data) {
            content.push(data)
            fs.writeFileSync(path.resolve(process.env.NODE_PATH) + '/dist/final.json', JSON.stringify(content));
        })
    })
}