# Know if a number is prime

This is an small javascript program to test if a number is prime or not.

It's a mesh and can will be refactored so many times when I have spare time to do it.

Remember: Found if a number is primer it's a great exercise!

## Included

`index.html < The file for showing it
isprime.js < The logic`

## So far

The way it works is easy, and html page with an input text and a button. After that a div that says if it's or not prime. Nothing more.

Into the isprime.js you can find the logic, and now it's very easy:

3 functions

1. isprime(). This function will take the data of the input text and fires the function that factorize the number. If the factorized have more than two elements (so it's divisible more than himself and 1) it's not prime otherwise it's prime.

2. factorize(num). An small function to factorize the number, the way to do it it's easy.

First you calculate the half of the number or, better the integer most near the half of the number. Then you calculate the type of step you will do the loop of numbers (on my case i and j). Depending if it's pair or not i can be 2 or 3 and j 1 or 2.

We made a loop on the i index with steps of j to the half and if the division of the number by i have 0 module, we add this number to the factor because it's a factor (i).

And last, we add the own number :)

3. isnumber(data). This function it's to know that the user put a number or not in the input text. A easy one.

After that we create the event of click on the button that fires isprime function and... done!
