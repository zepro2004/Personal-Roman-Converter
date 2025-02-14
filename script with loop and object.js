const number = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanNumeral = (num) => {
    const roman = {
        M: 1000, CM: 900, D: 500,
        CD: 400, C: 100, XC: 90,
        L: 50, XL: 40, X: 10,
        IX: 9, V: 5, IV: 4, I: 1
    };
    let romanNumerals = '';
    for (let i of Object.keys(roman)) {
        let q = Math.floor(num / roman[i]);
        num -= q * roman[i];
        romanNumerals += i.repeat(q);
    }
    return str;
}; 

button.addEventListener("click", checkInput = () => {
    const numberInt = parseInt(number.value);
    if(!number.value || isNaN(numberInt)) {
        output.style.display = "block";
        output.textContent = "Please enter a valid number";
        return;
    } else if (numberInt < 1) {
        output.style.display = "block";
        output.textContent = "Please enter a number greater than or equal to 1";
        return;
    } else if (numberInt > 3999) {
        output.style.display = "block";
        output.textContent = "Please enter a number less than or equal to 3999";
        return;
    }
     else {
        output.style.display = "block";
        output.textContent = romanNumeral(numberInt);
        number.value = "";
    }
});

