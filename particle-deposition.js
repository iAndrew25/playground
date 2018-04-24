function printIt(mx) {
	let parsedMx = '';
	for (let i = 0; i < mx.length; i++) {
		for (let j = 0; j < mx[0].length; j++) {
			parsedMx += mx[i][j] + ' ';
		}
		parsedMx += '\n';
	}

	console.log(parsedMx);
}

const isEdge = (x, y, map) => ![
	map[x]&&map[x][y+1], 
	map[x]&&map[x][y-1], 
	map[x+1]&&map[x+1][y], 
	map[x-1]&&map[x-1][y], 
	map[x-1]&&map[x-1][y-1], 
	map[x+1]&&map[x+1][y-1], 
	map[x+1]&&map[x+1][y+1], 
	map[x-1]&&map[x-1][y-1]
].some(Boolean);

const randomBetween = (max, min = 0) => Math.floor(Math.random() * max) + min;

function generateMap(width, height) {
	let map = Array(height).fill('-').map(() => Array(width).fill('-'));
	let x = randomBetween(width),
		y = randomBetween(height);

	

}