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



const compose = (...fns) => fns.reverse().reduce((prevFn, nextFn) => value => nextFn(prevFn(value)), value => value);

const isStable = arr => arr.every(item => item.value )






const adjacentNeighbours = ({x, y}, map) => [
	map[x]&&map[x][y+1], 
	map[x]&&map[x][y-1], 
	map[x+1]&&map[x+1][y], 
	map[x-1]&&map[x-1][y], 
];




//const allNeighbours = ({x, y}, map) => 


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

const isStable = (x, y, map) => [
	map[x]&&map[x][y+1], 
	map[x]&&map[x][y-1], 
	map[x+1]&&map[x+1][y], 
	map[x-1]&&map[x-1][y], 
	map[x-1]&&map[x-1][y-1], 
	map[x+1]&&map[x+1][y-1], 
	map[x+1]&&map[x+1][y+1], 
	map[x-1]&&map[x-1][y-1]
].every(i => map[x][y] <= i);



const neighbours = (x, y, map) => [
	map[x]&&map[x][y+1], 
	map[x]&&map[x][y-1], 
	map[x+1]&&map[x+1][y], 
	map[x-1]&&map[x-1][y], 
	map[x-1]&&map[x-1][y-1], 
	map[x+1]&&map[x+1][y-1], 
	map[x+1]&&map[x+1][y+1], 
	map[x-1]&&map[x-1][y-1]
].filter(Boolean);


let i = 0;
function buildMap(map, x, y) {
	if(i === 10) return;
	map[x][y] = typeof map[x][y] === "number" ? map[x][y] + 1 : 0;
	if(isStable(x, y, map)) {
		buildMap(map, x, y);
	} else {
		map[x][y+1] = typeof map[x][y+1] === "number" ? map[x][y+1] + 1 : 0;
		buildMap(map, x, y);
	}
	i++;
	console.log(map);
}




const generateEmptyMap = (height, width) => {
	return Array(height).fill(null).reduce((total, v, x) => [...total, ...Array(width).fill(null).reduce((total, v, y) => [...total, {x, y, value: 0}], [])], []);
}








const randomBetween = (max, min = 0) => Math.floor(Math.random() * max) + min;

function generateMap(width, height) {
	let map = Array(height).fill('-').map(() => Array(width).fill('-'));
	let x = randomBetween(width),
		y = randomBetween(height);


	buildMap(map, x, y)
}

printIt(generateMap(10, 10))