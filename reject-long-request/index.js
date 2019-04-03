let longRequest = async () => {

	let fakeRequest = new Promise((res, rej) => {
		setTimeout(() => rej('Request canceled'), 3000);
	});

	let realRequest = new Promise((res, rej) => {
		setTimeout(() => res('OK'), 3300);
	});

	return await Promise.race([fakeRequest, realRequest]);
}

longRequest()
	.then(res => console.log('response', res))
	.catch(res => console.log('catch', res));