const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
readline.question(`Masukkan bilangan ?`, (bilangan) => {
    let array = bilangan.split(",").map(Number);
    
    let result = deretGeometri(array);
    console.log(result)

    readline.close();
})
  
function deretGeometri(deret) {
    let pembagi1 = deret[1] / deret[0];
    let pembagi2 = deret[2] / deret[1];
    
    if (pembagi1 === pembagi2) {
        for (let i = 2; i < deret.length - 1; i++) {
            if (deret[i] * pembagi1 !== deret[i+1]) {
                return false
            }
        }
    } else {
        return false
    }
    return true;
}