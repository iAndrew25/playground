const example = first => second => list => {
	return list.filter(name => first === name || second === name)
};

let pple = ['a', 'b', 'c', 'd', 'e', 'f'];

let firstSet = example('a');

let secondSet = firstSet('b');

secondSet(pple);