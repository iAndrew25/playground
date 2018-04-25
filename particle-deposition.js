function printIt(map, MAP_WIDTH) {
	let parsedMap = '';
	for (let i = 0; i < map.length; i++) {
		parsedMap += map[i].x + '' + map[i].y + '  ';
		if((i+1) % MAP_WIDTH === 0) {
			parsedMap += '\n';
		}
	}

	console.log(parsedMap);
}


function getIndex(rows, cols) {
	return rows * MAP_WIDTH + cols;
}

function getCoords(i, MAP_WIDTH) {
	return {
		x: i % MAP_WIDTH,
		y: Math.floor(i / MAP_WIDTH)
	}
}

const adjacentNeighbours = (x, y, map) => [
	map[getIndex(x, y+1)], 
	map[getIndex(x, y-1)], 
	map[getIndex(x+1, y)],
	map[getIndex(x-1, y)]
].filter(Boolean);

const generateEmptyMap = (height, width) => {
	return Array(height).fill(null).reduce((total, v, x) => [...total, ...Array(width).fill(null).reduce((total, v, y) => [...total, {x, y, value: 0}], [])], []);
}


const MAP_WIDTH = 3,
	MAP_HEIGHT = 3,
	MAP = generateEmptyMap(MAP_HEIGHT, MAP_WIDTH);

const randomBetween = (max, min = 0) => Math.floor(Math.random() * max) + min;

printIt(MAP, MAP_WIDTH);

console.log(adjacentNeighbours(0, 1, MAP));