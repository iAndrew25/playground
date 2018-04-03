if(navigator.serviceWorker) {
	navigator.serviceWorker.register('./service-worker.js')
		.then(res => console.log('[Service Worker] Registered'))
		.catch(err => console.error('[Service Worker] Could not register', err))
} else {
	console.log('Service Worker is not supported on this browser');
}

let imgSrc;

document.getElementById('get-data').addEventListener('click', e => {
	console.log('Clicked');
	console.log("imgSrc", imgSrc);


	fetch('http://localhost:3000/test')
		.then(b => b.json())
		.then(img => {
			console.log("img", img);
			imgSrc = img;
		});
});