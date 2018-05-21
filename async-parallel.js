async function promiseAll() {
	console.time('Promise all');
	let posts = fetch('https://jsonplaceholder.typicode.com/posts'),
		comments = fetch('https://jsonplaceholder.typicode.com/comments'),
		albums = fetch('https://jsonplaceholder.typicode.com/albums'),
		photos = fetch('https://jsonplaceholder.typicode.com/photos'),
		todos = fetch('https://jsonplaceholder.typicode.com/todos'),
		users = fetch('https://jsonplaceholder.typicode.com/users');

	Promise.all([posts, comments, albums, photos, todos, users])
		.then(values => Promise.all(values.map(r => r.json())))
		.then(values => {
			console.log(values);
			console.timeEnd('Promise all');
		});
}


async function awaitFetch() {
	console.time('Await fetch');
	let posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json()),
		comments = await fetch('https://jsonplaceholder.typicode.com/comments').then(r => r.json()),
		albums = await fetch('https://jsonplaceholder.typicode.com/albums').then(r => r.json()),
		photos = await fetch('https://jsonplaceholder.typicode.com/photos').then(r => r.json()),
		todos = await fetch('https://jsonplaceholder.typicode.com/todos').then(r => r.json()),
		users = await fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json());

	console.log([posts, comments, albums, photos, todos, users]);
	console.timeEnd('Await fetch');
}