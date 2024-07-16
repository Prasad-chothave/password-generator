const inputslider=document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passswordDisplay = document.querySelector("[data-passwordDispaly]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbol = '~!@#$%^&*()_-+={[]}|;:"<,>.?/';

let password ="";
letpasswordLength =10;
let checkCount =0;
handleSlider();


function handleSlider(){
    inputslider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}


function setIndicator(color){
    indicator.style.backgroundColor = color;

}

function getRndInteger(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}

function generateRandomNumber(){
    return getRndInteger(0,9);
}

function generateLowerCase(){
    return String.fromCharcode(getRndInteger(97,123));
}

function generateUpperCase(){
    return String.fromCharcode(getRndInteger(65,91));
}

function generateSymbol(){
    const randNum=getRndInteger(0,symbols,length);
    return Symbol.CharAt(randNum);
}

function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numbersCheck.checked) hasNum = true;
    if(symbolsCheck.checked) hasSym = true;

    if(hasupper && hasLower &&(hasNum || hasSym) && passwordLength >=8){
        setIndicator("#0f0");

    }
    else if(
        (hasLower || hasUpper)&&
        (hasNum || hasSym)&&
        passwordLength >= 6
    ){
        setIndicator("#ff0");
    }else{
        setIndicator("#f00");
    }
}

async function copyContent(){
    try{

    }
}







function shufflePassword(array){
    for(let i =array.length-1; i>0; i--){
        const j =Math.floor(Math.random()*(i+1));
        const temp =array[j];
        array[i] = array[j];
        array[j] = temp;
    }

    let str ="";
    array.forEach((el) => (str += el));
    return str;
}

function handCheckBoxChange(){
    checkCount = 0;
    allCheckBox.forEach((checkbox) =>{
        if(checkbox.checked)
            checkCount++;
    });

    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
}