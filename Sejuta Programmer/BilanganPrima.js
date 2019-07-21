const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
readline.question(`Masukkan bilangan ?`, (bilangan) => {
    var array = bilangan.split(",").map(Number);
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1) {
            console.log(array[i], 'Bukan Bilangan Prima')
        } else if (array[i] === 2) {
            console.log(array[i], 'Bilangan Prima')
        } else if (array[i] === 3) {
            console.log(array[i], 'Bilangan Prima')
        } else if (array[i] % 2 === 0) {
            console.log(array[i], 'Bukan Bilangan Prima')
        } else if (array[i] % 3 === 0) {
            console.log(array[i], 'Bukan Bilangan Prima')
        } else {
            console.log(array[i], 'Bilangan Prima')
        }
    }
    readline.close()
})
  