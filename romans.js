// Constants for the literals
const INVALID_ROMAN = "Please enter a valid roman";
const INVALID_INTEGER = "Please enter a valid integer";
const OUT_OF_RANGE = "Out of range (1-3999)";

function init() { 
  // Load elements once to avoid repetition on every invocation
  var modeCheckbox = document.querySelector("input[type='checkbox']");
  var header = document.querySelector("h1");
  var convertButton = document.querySelector(".convert-button");
  var outputArea = document.querySelector(".convert-output");
  var inputArea = document.querySelector("input[type='text']");

  modeCheckbox.addEventListener("change", (e) => {
    header.innerHTML = getModeTitle(e.target.checked);
  });

  const getModeTitle = (integerToRoman) => {
    return integerToRoman ? "Integer To Roman" : "Roman To Integer";
  };

  // Conversion operation to handle UI inputs and outputs
  convertButton.addEventListener("click", () => {
    let inputValue = inputArea.value;
    let conversion = modeCheckbox.checked ? convertIntegerToRoman(inputValue) : convertRomanToInteger(inputValue);
    if (conversion.result) {
      outputArea.innerHTML = conversion.value;
    } else {
      alert(conversion.message);
    }
  });
}

// Conversion method: Roman to Integer
const convertRomanToInteger = (roman) => {
  let response = {
    value: 0, 
    message: '',
    result: false 
  };

  // Regexp to check if a string is a valid roman number
  const romanNumeralRegex = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

  // Convert the string to uppercase for consistency
  roman = roman.toUpperCase();
  const regexResult = romanNumeralRegex.test(roman);

  if (!regexResult || roman.length <= 0) {
    response.message = INVALID_ROMAN;
    return response;
  }

  const values = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
  };

  let sum = 0;
  let prevIndex = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    if (values[roman[i]] >= prevIndex) {
      sum += values[roman[i]];
    } else {
      sum -= values[roman[i]];
    }
    prevIndex = values[roman[i]];
  }

  response.value = sum;
  response.result = true;
  return response;
};

// Conversion method: Integer to Roman
const convertIntegerToRoman = (num) => {
  let response = {
    value: '',
    message: '', 
    result: false 
  };

  const numberRegex = /^\d+$/;
  const regexResult = numberRegex.test(num);

  if (!regexResult) {
    response.message = INVALID_INTEGER;
    return response;
  }

  if (Number(num) > 3999 || Number(num) < 1) {
    response.message = OUT_OF_RANGE;
    return response;   
  }

  const mapping = {
    1000: "M", 900: "CM", 500: "D", 400: "CD",
    100: "C", 90: "XC", 50: "L", 40: "XL",
    10: "X", 9: "IX", 5: "V", 4: "IV", 1: "I"
  };

  let result = '';
  for (let key in mapping) {
    while (num >= key) {
      result += mapping[key];
      num -= key;
    }
  }

  response.value = result;
  response.result = true;
  return response;
};
