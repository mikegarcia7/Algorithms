// Create a for loop where numbers divisible by 3 produce "Fizz", multiples of 5 produce "Buzz", and multiples of both 3 and 5 produce "FizzBuzz" all using numbers between 1 and 100.

// We must create a for loop:

for (i = 1; i < 101; i++) {
	if (i % 15 == 0) console.log('FizzBuzz');
	else if (i % 3 == 0) console.log('Fizz');
	else if (i % 5 == 0) console.log('Buzz');
	else console.log(i);
}
