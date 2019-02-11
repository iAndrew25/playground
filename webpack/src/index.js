window.onload = function() {
	let btn = document.createElement('button');
		btn.innerText = 'Button';
		btn.onclick = function() {
		console.log('loading');
		 import('./loadable').then(content => {
			 console.log('loaded');
		});
	}

	document.body.appendChild(btn);
}
