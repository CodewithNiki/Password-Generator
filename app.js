const lengthRange = document.getElementById("length-range");
const lengthNum = document.getElementById("length-number");
const numbers = document.getElementById("numbers");
const uppercase = document.getElementById("uppercase");
const symbols = document.getElementById("symbols");
const formContainer = document.querySelector("form");
const passwordContainer = document.querySelector("#password")

lengthRange.addEventListener("input", lengthChange);
lengthNum.addEventListener("input", lengthChange);

formContainer.addEventListener("submit", (e)=>{
    e.preventDefault();
    const lengthAmount = lengthNum.value;
    const includeNumbers = numbers.checked;
    const includeUppercase = uppercase.checked;
    const includeSymbols = symbols.checked;

    passwordContainer.innerHTML = generatePassword(lengthAmount, includeNumbers, includeUppercase, includeSymbols);
    passwordContainer.style.color = "blue"
})

function lengthChange(e){
    let targetValue = e.target.value;
    lengthRange.value = targetValue;
    lengthNum.value = targetValue;
}

function generatePassword(lengthAmount, includeNumbers, includeUppercase, includeSymbols){
    let charCode = lowercaseCharCode;
    if(includeNumbers) charCode = charCode.concat(numberscaseCharCode);
    if(includeUppercase) charCode = charCode.concat(uppercaseCharCode);
    if(includeSymbols) charCode = charCode.concat(symbolsCharCode);

    const password = [];
    for(let j = 0; j < lengthAmount; j++){
        let characterCodes  = charCode[Math.floor(Math.random() * charCode.length)]
        password.push(String.fromCharCode(characterCodes));
    }
    return password.join("");
}

const lowercaseCharCode = arrayLowToHigh(97, 122);
const uppercaseCharCode = arrayLowToHigh(65, 90);
const numberscaseCharCode = arrayLowToHigh(48, 57);
const symbolsCharCode = arrayLowToHigh(33, 47).concat(58, 64).concat(91, 96).concat(123, 126);

function arrayLowToHigh(low, high){
    let array = [];
    for(let i = low; i <= high; i++){
        array.push(i);
    }
    return array;
}