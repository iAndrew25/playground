var proxy = new Proxy({
	first: {
		value: true,
		callback: () => console.log('aaahahahahaaa')
	}
}, {
	get(target, key) {
		return key in target ? target[key].value : null;
	},
	set(target, key, value) {
		target[key] ? target[key].value = value : target[key] = {value, callback: () => {}};
		key !== 'callback' && target[key].callback();
		return true;
	}
});

proxy.first = 'sdg';
proxy.first.callback = () => console.log('new cb');
console.log(proxy.first);