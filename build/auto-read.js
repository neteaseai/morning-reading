const fs = require('fs-extra')
const { join } = require('path')

let logo = `# Netease AI前端早读课\n\n分享你的世界\n\n`
let read = async entry => {
    let files = fs.readdirSync(entry)
    let promises = files.map(file => fs.readFile(`${entry}/${file}`, 'utf-8'))
    let contents = await Promise.all(promises)

    return files.map((file, index) => ({file, content: contents[index]}))
}

let write = (output, data) => fs.outputFile(output, logo + data.map(({ file, content }) => `${file}\n${content}`).join('\n\n'))

exports.read = read
exports.write = write
