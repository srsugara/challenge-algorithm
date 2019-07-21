const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
readline.question(`Masukkan bilangan ?`, (bilangan) => {
    let array = bilangan.split(",").map(Number);
    let temp = []
    let modus = 0;
    let max = 0;

    for (let i = 0; i < array.length; i++) {
        if(typeof temp[array[i]] === 'undefined') {
            temp[array[i]] = 1
        } else {
            temp[array[i]] = temp[array[i]] + 1
        }
        if (modus <= temp[array[i]]) {
            if (modus < temp[array[i]]) {
                modus = temp[array[i]]
                max = array[i]
            } else if (modus === temp[array[i]]) {
                max = -1
            }
        }
    }
    console.log(max)

    readline.close()
})
  