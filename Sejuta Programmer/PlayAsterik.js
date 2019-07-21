const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
readline.question(`Masukkan n ?`, (n) => {
    for (let i = 0; i < n; i++) {
        let str = ''
        for (let j = i; j < n-1; j++) {
            str = str + ' '
        }
        for (let k = 0; k < (2 * i) + 1; k++) {
            if (str[str.length - 1] === '*') {
                str = str + ' '
            } else {
                str = str + '*'
            }
        }
        console.log(str)
    }
    readline.close()
})