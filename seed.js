let seed = 1;

function random() {
	const x = Math.sin(seed++) * 10000;
	return x - Math.floor(x);
}

setInterval(() => console.log(random()), 1000);