//Loads DOM content before script runs
document.addEventListener("DOMContentLoaded", () => {
  //brings my HTML elements into JS
  let tempInput = document.querySelector(".temp-type-input");
  let tempNumber = document.querySelector(".temp-number-input");
  let tempOutput = document.querySelector(".temp-output");
  let button = document.querySelector(".calculate-Temp-button");
  let resultDisplay = document.querySelector(".Results");

  //Adds EventListener to my calculate button to run code in if statement{}brackets when clicked
  button.addEventListener("click", (event) => {
    if (event.type === "click") {
      //sets input values to Uppercase to cover all case input possibilities parseFloat converts String type input into number
      let inputType = tempInput.value.toUpperCase();
      let outputType = tempOutput.value.toUpperCase();
      let inputValue = parseFloat(tempNumber.value);
      let tempResult;
      let conversionType = `${inputType}-${outputType}`;
      switch (conversionType) {
        //handles conversion of mentioned input and output using formula inside
        case "C-F":
        case "CELSIUS-FAHRENHEIT":
          tempResult = (inputValue * 9) / 5 + 32;
          break;
        case "F-C":
        case "FAHRENHEIT-CELSIUS":
          tempResult = ((inputValue - 32) * 5) / 9;
          break;
        case "C-K":
        case "CELSIUS-KELVIN":
          tempResult = inputValue + 273.15;
          break;
        case "K-C":
        case "KELVIN-CELSIUS":
          tempResult = inputValue - 273.15;
          break;
        case "K-F":
        case "KELVIN-FAHRENHEIT":
          tempResult = (inputValue * 9) / 5 - 459.67;
          break;
        case "F-K":
        case "FAHRENHEIT-KELVIN":
          tempResult = ((inputValue + 459.67) * 5) / 9;
          break;
        //Just incase you enter something else not mentioned
        default:
          console.log(
            `I cant calculate ${inputType} to ${outputType} please select from provided List`
          );

          return;
      }
      //Logs Result in console this is not nessecary due to result displays on page
      console.log(
        `${inputValue} degrees ${inputType} is ${tempResult} degrees ${outputType}`
      );
      //Clears Input fields
      tempInput.value = "";
      tempOutput.value = "";
      tempNumber.value = "";
      //Displays results on page using .innerHTML
      resultDisplay.innerHTML = `${inputValue} degrees ${inputType} is ${tempResult} degrees ${outputType}`;
    }
  });
});
