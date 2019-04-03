function encodeSvg(svg) {
	return svg
		.replace(/(<!--).*(-->)/g, '')
		.replace(/"/g, '\'')
		.replace(/%/g, '%25')
		.replace(/#/g, '%23')
		.replace(/{/g, '%7B')
		.replace(/}/g, '%7D')
		.replace(/</g, '%3C')
		.replace(/>/g, '%3E')
		.replace(/\(/g, '%28')
		.replace(/\)/g, '%29')
		.replace(/\t/g, '')
		.replace(/\r?\n|\r/g, '');
}

console.log(encodeSvg(x));