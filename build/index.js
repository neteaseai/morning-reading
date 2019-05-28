const {read, write} = require('./auto-read')

const readEntry = './src'
const output = './README.md'
read(readEntry).then(content => write(output, content))
