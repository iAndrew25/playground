function generateRandom(seed = 1) {
	let nextSeed = seed;

	return {
		next: function() {
			nextSeed = (nextSeed * 9301 + 49297) % 233280;

			return {
				value: nextSeed / 233280
			}
		}
	}
}

const generate = generateRandom(2);

setInterval(() => console.log(generate.next()), 1000);