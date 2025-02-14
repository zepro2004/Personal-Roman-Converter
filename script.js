const number = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanNumeral = (num) => {
    const romanNumerals = [
        { number: 1000, numeral: 'M' },
        { number: 900, numeral: 'CM' },
        { number: 500, numeral: 'D' },
        { number: 400, numeral: 'CD' },
        { number: 100, numeral: 'C' },
        { number: 90, numeral: 'XC' },
        { number: 50, numeral: 'L' },
        { number: 40, numeral: 'XL' },
        { number: 10, numeral: 'X' },
        { number: 9, numeral: 'IX' },
        { number: 5, numeral: 'V' },
        { number: 4, numeral: 'IV' },
        { number: 1, numeral: 'I' }
    ];
    if (num === 0) {
        return "";
    }
    for (let i = 0; i < romanNumerals.length; i++) {
        if (num >= romanNumerals[i].number) {
            return romanNumerals[i].numeral + romanNumeral(num - romanNumerals[i].number);
        }
    }    
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

