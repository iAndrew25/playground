window.addEventListener('error', event => {
	const {message, filename, lineno, colno} = event;
	console.log(`Error: ${message}, Script: ${filename}, Line: ${lineno}, Column: ${colno}`);
	//reportErrorToServer({message})
})

throw new Error('Lorem ipsum dolor sit amet, consectetur adipisicing elit.');


const errorHandler = (url, error, errorType = 'CLIENT') => {
	switch(errorType) {
		case 'CLIENT':
			logError(url, error);
			break;
		case 'SERVER':
			displayError(error);
			break;
		default:
	}
}

const displayError = ({status, message}) => {
	// display error
}

const logError = (url, {message, stack}, extra = {}) => {
	fetch(url, {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			message: message,
			callstack: stack,
			timestamp: new Date(),
			...extra
		})
	});
}