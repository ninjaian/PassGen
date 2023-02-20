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



let passwordLength = currentLength;
let newCharFull = 0;
const passGen = () => {
    let newPass;
    const uppercaseList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const lowercaseList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const numberList = [1,2,3,4,5,6,7,8,9]
    const symbolList = ['!', '@', '#', '$', '%', "^", '&', '*']
    if(uppercase.checked && lowercase.checked && number.checked && symbol.checked) {
        for(let i = 0; i <= passwordLength; i++) {
            let randUpper = Math.floor(Math.random() * uppercaseList.length);
            let randLower = Math.floor(Math.random() * lowercaseList.length);
            let randNum = Math.floor(Math.random() * numberList.length);
            let randSymbol = Math.floor(Math.random() * symbolList.length);
            let randSelect = Math.floor(Math.random() * 3) 
            
            if(randSelect === 0){
                newCharFull = uppercaseList[randUpper]
            } else if (randSelect === 1){
                newCharFull = lowercaseList[randLower];
            } else if (randSelect === 2){
                newCharFull = numberList[randNum];
            } else if (randSelect === 3){
                newCharFull = symbolList[randSymbol];
            }
            password.value = randSelect
            // newPass += str(newCharFull)
            // newPass += `${uppercaseList[randUpper]}${lowercaseList[randLower]}${numberList[randNum]}${symbolList[randSymbol]}`
        }
        // password.value = newPass
    } 
}
