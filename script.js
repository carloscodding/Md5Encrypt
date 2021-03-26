const fs = require('fs')

console.log("Md5 Encryption")

console.log("*************************")

console.log("Contacts!")

console.log("Discord: _carlos#8479")

console.log("************************")

// Insert Text In NameText Run Script

let nametext = ''

var md5 = require('md5')

let md5hash = md5(nametext)


fs.writeFileSync('md5encryption.txt',md5hash)
