const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
readline.question(`Masukkan string = `, (str) => {
    readline.question(`Masukkan character = `, (char) => {
        let arrayString = str.split("");
        let arrayChar = char.split(",");
        let newString = '';

        for (let i = 0; i < arrayString.length; i++) {
            for (let j = 0; j < arrayChar.length; j++) {
                let check = false
                if (arrayString[i] === arrayChar[j]) {
                    check = true
                    break;
                }
                if (j === arrayChar.length - 1 && check === false) {
                    newString = newString + arrayString[i]
                }
            }
        }
        console.log(newString)

        readline.close()
    })
})