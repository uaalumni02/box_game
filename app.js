
let numberInput;

document.getElementById('number').addEventListener('change', function(event) {
    numberInput = event.target.value;
    // console.log(numberInput);
});


const getRndInteger = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    // console.log(randomNumber)
    const elem = document.getElementById('box');
    if (numberInput == randomNumber) {
        elem.parentNode.removeChild(elem);
    } else {
        alert('guess again')
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