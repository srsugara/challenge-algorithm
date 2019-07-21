const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
readline.question(`Masukkan bilangan ?`, (bilangan) => {
    let array = bilangan.split(",").map(Number);
    let temp = []
    let mayoritas = '';
    let limit = array.length/2;

    for (let i = 0; i < array.length; i++) {
        if (typeof temp[array[i]] === 'undefined') {
            temp[array[i]] = 1
        } else {
            temp[array[i]] = temp[array[i]] + 1
        }
        if (temp[array[i]] > limit) {
            mayoritas = array[i]
        }
    }

    if (mayoritas === '') {
        mayoritas = 'Tidak ditemukan';
    }
    
    console.log(mayoritas)

    readline.close()
})
  