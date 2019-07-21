const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
readline.question(`Masukkan bilangan ?`, (bilangan) => {
    var array = bilangan.split(",").map(Number);
    let temp = 0
    let total;
    for (let i = 0; i < array.length; i++) {
        temp = temp + array[i];
    }
    total = parseInt(temp / array.length)
    console.log(total)

    readline.close()
})
  