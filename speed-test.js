const arr = new Array(10000000).fill(null).map(i => Math.floor(Math.random() * 20));

console.time('Set');
	const set = [...new Set(arr)];
	console.log('New set', set.length);
console.timeEnd('Set');

console.time('Filter');
	const filt = arr.filter((item, pos) => arr.indexOf(item) == pos);
	console.log('New filter', filt.length);
console.timeEnd('Filter');