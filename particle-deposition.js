function printIt(map, MAP_WIDTH) {
	let parsedMap = '';
	for (let i = 0; i < map.length; i++) {
		// parsedMap += map[i].x + '' + map[i].y + '  ';
		parsedMap += map[i].value + ' ';
		if((i+1) % MAP_WIDTH === 0) {
			parsedMap += '\n';
		}
	}

	console.log(parsedMap);
}

const generateEmptyMap = (height, width) => {
	return Array(height).fill(null).reduce((total, v, x) => [...total, ...Array(width).fill(null).reduce((total, v, y) => [...total, {x, y, value: 0, stable: false}], [])], []);
}

const randomBetween = (max, min = 0) => Math.floor(Math.random() * max) + min;

const compose = (...fns) =>
	fns.reverse().reduce((prevFn, nextFn) =>
		value => nextFn(prevFn(value)),
		value => value
	);

const MAP_WIDTH = 20,
	MAP_HEIGHT = 20;
let startPoint = randomBetween((MAP_WIDTH * MAP_HEIGHT) - 1);

let	MAP = generateEmptyMap(MAP_HEIGHT, MAP_WIDTH);

function getIndex(rows, cols) {
	return rows * MAP_WIDTH + cols;
}

function getCoords(i) {
	return {
		x: Math.floor(i / MAP_WIDTH),
		y: i % MAP_WIDTH
	}
}

const adjacentNeighbours = (x, y) => [
	MAP[getIndex(x, y+1)],
	MAP[getIndex(x, y-1)],
	MAP[getIndex(x+1, y)],
	MAP[getIndex(x-1, y)]
].filter(Boolean);

const isStable = (x, y) => adjacentNeighbours(x, y).every(i => i.value >= MAP[getIndex(x, y)].value);
const unstableNeighbours = (x, y) => adjacentNeighbours(x, y).filter(i => i.value < MAP[getIndex(x, y)].value);


let i = 0;

function dd(fall) {
	if(fall) {
		if(isStable(fall.x, fall.y)) {
			//console.log('fall is stable');
			MAP[getIndex(fall.x, fall.y)].value++;
			dd();
		} else {
			//console.log('fall not stable');
			let unstable = unstableNeighbours(fall.x,fall.y);
			//console.log("fall unstable", unstable);
			dd(unstable[randomBetween(unstable.length-1)]);
		}		
	} else {
		i++;
		const {x, y} = getCoords(startPoint);
		if(i % 50 === 0) startPoint = randomBetween((MAP_WIDTH * MAP_HEIGHT) - 1);
		if(i === 500) return true;
		//console.log("LOOPS: ", i);
		//printIt(MAP, MAP_WIDTH);

		if(isStable(x, y)) {
			//console.log('is stable');
			MAP[startPoint].value++;

			dd();
		} else {
			//console.log('not stable');
			let unstable = unstableNeighbours(x,y);
			//console.log("unstable", unstable);
			dd(unstable[randomBetween(unstable.length-1)]);
		}

	}


}

dd();
printIt(MAP, MAP_WIDTH);