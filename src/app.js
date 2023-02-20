let slider = document.querySelector('#slider')
let currentLength = document.querySelector('#currentPassLength')
let uppercase = document.querySelector('#uppercase')
let lowercase = document.querySelector('#lowercase')
let number = document.querySelector('#number')
let symbol = document.querySelector('#symbol')
let password = document.querySelector('#generatedPass')
let btn = document.querySelector('#btnGen')


currentLength.innerHTML = `Password Length: ${slider.value}`
slider.oninput = () => {
    currentLength.innerHTML = `Password Length: ${slider.value}`
}

// password.value = 'text here'




let newChar;
const passGen = () => {
    let passwordLength = slider.value;
    let newPass = ''
    const uppercaseList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const lowercaseList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const numberList = [1,2,3,4,5,6,7,8,9]
    const symbolList = ['!', '@', '#', '$', '%', "^", '&', '*']
    // if(uppercase.checked && lowercase.checked && number.checked && symbol.checked) {
        for(let i = 0; i <= passwordLength - 1; i++) {
            let randUpper = Math.floor(Math.random() * uppercaseList.length);
            let randLower = Math.floor(Math.random() * lowercaseList.length);
            let randNum = Math.floor(Math.random() * numberList.length);
            let randSymbol = Math.floor(Math.random() * symbolList.length);
            let checked = 0;
            let newCharFull = ''
            if(uppercase.checked){
                newCharFull += uppercaseList[randUpper];
                checked++;
            }
            if(lowercase.checked) {
                newCharFull += lowercaseList[randLower];
                checked++;
            }
            if(number.checked) {
                newCharFull += numberList[randNum];
                checked++;
            }
            if(symbol.checked){
                newCharFull += symbolList[randSymbol];
                checked++;
            }

            let randSelect = Math.floor(Math.random() * (checked))
            newPass += newCharFull[randSelect]



        //     if(randSelect === 0){
        //         newCharFull = uppercaseList[randUpper]
        //     } else if (randSelect === 1){
        //         newCharFull = lowercaseList[randLower];
        //     } else if (randSelect === 2){
        //         newCharFull = numberList[randNum];
        //     } else if (randSelect === 3){
        //         newCharFull = symbolList[randSymbol];
        //     }
        //     newPass += newCharFull
        //     console.log(newPass)
        // for(let i = 0; i <= parseint(passwordLength); i++) {
        //     newPass += str(newCharFull)
        // }
        }
    password.value = newPass;
}
