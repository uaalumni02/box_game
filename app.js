
let numberInput;

const inputNumber = () => {
    numberInput = document.getElementById('number').value
    if (isNaN(numberInput) || numberInput < 1 || numberInput > 3) {
          alert("Input not valid");
        } else {
          console.log("Input OK");
        }
  }

let randomNumber;
const getRndInteger = (min, max) => {
    randomNumber = Math.floor(Math.random() * (max - min)) + min;
    // console.log(randomNumber)
    const elem = document.getElementById('box');
    if (numberInput == randomNumber) {
        elem.parentNode.removeChild(elem);
    } else {
        // alert('guess again')
        score()
    }

    return randomNumber;
}

let counter = 1;
const score = () => {
    //   console.log(counter);   
    document.getElementById('scoreBox').innerHTML = counter;
        return ++counter
    }



//read up on addEventListener