const ioHelper = require('io-helper')
const prompt = require('prompt-promise')
const chalk = require('chalk')
const _ = require('lodash')
/**
 * 公共属性及方法
 */
export default {
    cwd: process.cwd(),
    rootPath: ioHelper.pathTool.join(__dirname, '..'),
    async prompt(describe) {
        let value = await prompt(describe)
        return _.trim(value)
    },
    async writeFile(path, content) {
        return await ioHelper.writeFile(path, content)
    },
    exit() {
        process.exit()
    }
}