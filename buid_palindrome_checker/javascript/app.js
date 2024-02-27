const checkButton = document.getElementById("check-btn");
const form = document.getElementById("form");
const formInputElement = document.getElementById("text-input");

let checkLowerCaseASCIICode = (lowerCaseCharacter) => {
    
    const asciiDecimalCharacerValue = lowerCaseCharacter.charCodeAt(0);

    if (asciiDecimalCharacerValue >= 97 && asciiDecimalCharacerValue <= 122){

        return true;
    } else {

        return false;
    }

}
let createOnlyCasesStrings = (stringText) => {

    let onlyCasesArray = [];
    let stringCharacter = "";
    for (let index = 0; index < stringText.length; index++) {

        stringCharacter = stringText[index];

        if (checkLowerCaseASCIICode(stringCharacter.toLowerCase())){

            onlyCasesArray.push(stringCharacter.toLowerCase());
        }
    }

    const nonReversedString = onlyCasesArray.join("");
    const reversedString = (onlyCasesArray.reverse()).join("");

    return {"nonReversedString":nonReversedString,"reversedString":reversedString};

}
let checkPalindrome = (stringText) =>{
    const stringLength = stringText.length;
    const resultTextElement = document.getElementById("result");
    const stringsObject = createOnlyCasesStrings(stringText);
    console.log(stringsObject);
    if (stringsObject.nonReversedString === stringsObject.reversedString){
        resultTextElement.textContent = `${stringText} is a palindrome`;
    } else {

        resultTextElement.textContent = `${stringText} is not a palindrome`;

    }


    
}
let submitForm = () =>{
    const formInputText = formInputElement.value;
    if (!formInputText){

        alert("Please input a value");
    }else {

        checkPalindrome(formInputText);

    }
    

};

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    form.reset();
})
checkButton.addEventListener("click", submitForm);
