const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
readline.question(`Masukkan string ?`, (kalimat) => {
    var array = kalimat.split("");
    for (let i = 0; i < parseInt(array.length / 2); i++) {
        if (array[i] !== array[array.length - (i + 1)]) {
            console.log('Bukan Palindrom')
            break
        } else if (i === parseInt(array.length / 2) - 1) {
            console.log('Palindrom')
        }
    }
    readline.close()
})
  