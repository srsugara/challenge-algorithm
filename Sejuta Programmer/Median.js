const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
readline.question(`Masukkan bilangan ?`, (bilangan) => {
    let center, med;
    let array = bilangan.split(",").map(Number);

    array = array.sort();
    center = parseInt(array.length / 2);

    if(array.length % 2 === 0) {
        med = (array[center - 1] + array[center]) / 2
    } else {
        med = array[center]
    }
    console.log(med)

    readline.close()
})
  