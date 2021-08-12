let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • saweria.co/FranChou
│ • via gopay
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
