window.addEventListener('error', event => {
	const {message, filename, lineno, colno} = event;
	console.log(`Error: ${message}, Script: ${filename}, Line: ${lineno}, Column: ${colno}`);
	//reportErrorToServer({message})
})

throw new Error('Lorem ipsum dolor sit amet, consectetur adipisicing elit.');