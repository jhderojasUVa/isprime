//

function isprime() {
  // Get the number;
  let numberToTest = document.getElementsByClassName('inputnumber')[0].value;
  if (isnumber(numberToTest)){
    // It's prime, let's do the fastest approach

    // How it works
    // The fast (I know) way to test if a number is prime is to factorize the number and see how many factors it have.
    let number = factorize(numberToTest);
    if (number.length == 2) {
      // It's only divisible by 1 and himself
      document.getElementsByClassName('result')[0].innerHTML = 'Is prime';
    } else {
      // It's divisible between a bunch of numbers
      document.getElementsByClassName('result')[0].innerHTML = 'Is not prime';
    }
  }
}

// Factorizing the number
function factorize(num) {
  // Let's calculate the half to have the half :)
  let half = Math.floor(num / 2);
  // We create the solution array of the factoticed, 1 is allways part of the solution
  let str = [1];
  // Let's create i and j for looping in order to create the factors
  let i, j;

  // Determine out increment value for the loop and starting point
  num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

  // Do the loop
  for (i; i <= half; i += j) {
      // Addiding if needed the factor to the array
      num % i === 0 ? str.push(i) : false;
  }
  // And, of course the number because every number it's divisible by himself
  str.push(parseInt(num));
  // Returning it
  return str;
}

// Function to know if the input is a number
function isnumber(data) {
  // Function to test if it's a number
  if (Number.isInteger(parseInt(data))) {
    // Yes, it's a number
    return true;
  } else {
    // No it's whatever, but not a number
    return false;
  }
}

// Creating the click event into the button that fires all the logic
document.getElementsByClassName('button')[0].addEventListener('click', isprime);
