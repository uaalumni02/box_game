
let numberInput

const inputNumber = () => {
    numberInput = document.getElementById('number').value
    if (isNaN(numberInput) || numberInput < 1 || numberInput > 3) {
            document.getElementById("validationResponse").innerHTML = 'Invalid Input';
        } else {
          score()
        }
  }

let randomNumber;
const getRndInteger = (min, max) => {
    randomNumber = Math.floor(Math.random() * (max - min)) + min;
    const elem = document.getElementById('box');
    if (numberInput == randomNumber) {
        elem.parentNode.removeChild(elem);
    } else {
        console.log('guess again')
    }

    return randomNumber;
}

let counter = 1;
const score = () => {
    document.getElementById('scoreBox').innerHTML = counter;
        return ++counter
    }



