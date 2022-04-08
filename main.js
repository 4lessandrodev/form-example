const FORM = document.getElementById('form');

FORM.addEventListener('submit', function (e) {
	let data = {};

	e.preventDefault();
	const form = e.target;

	const inputs = form.querySelectorAll('input[type=email], input[type=password], input[type=checkbox]');

	inputs.forEach((input) => {

		if (input.type === 'checkbox') 
			Object.assign(data, { [input.name]: input.checked });
		else
			Object.assign(data, { [input.name]: input.value });
	});

	document.write(JSON.stringify(data));
});
