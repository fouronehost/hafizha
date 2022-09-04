
const fs = require('fs')
const chalk = require('chalk')


global.owner = ['6281272458952','6281272832894']
global.packname = 'fourone mood 𝚅1'
global.author = 'fourone mood 𝚅1'
global.sessionName = 'data'
global.prefa = ['','!','.','#']
global.ownername = 'Owner'
global.sp = '>'
global.mess = {
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: '𝙵𝙸𝚃𝚄𝚁 𝙺𝙷𝚄𝚂𝚄𝚂 𝙾𝚆𝙽𝙴𝚁 𝙱𝙾𝚃 :𝚅 𝚂𝙴𝙻𝙰𝙸𝙽 𝙾𝚆𝙽𝙴𝚁 ? 𝚂𝙺𝙸𝙿',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '_Data In Process, Please Wait A Minute.._',
}
global.thumb = fs.readFileSync('./lib/assets/logo.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
