const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
readline.question(`Masukkan keys = `, (key) => {
    readline.question(`Masukkan values = `, (value) => {
        let keys = key.split(",");
        let values = value.split(",");
        let map = new Map();
        let str = ''

        for (let i = 0; i < keys.length; i++) {
            map.set(keys[i],values[i]);
        }

        for (let i = 0; i < keys.length; i++) {
            str = str + keys[i] + ':' + map.get(keys[i]) + ' ';
        }

        console.log('map => ' + str)

        readline.close()
    })
})