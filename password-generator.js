let generator = require('generate-password');

let password = generator.generate({
	length: 15,
	numbers: true
});


console.log(password);