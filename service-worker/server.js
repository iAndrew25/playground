const express = require('express'),
	app = express();

app.use(express.static('./'));

app.get('/', (req, res) => res.sendFile('index.html'));

app.get('/test', (req, res) => res.json({src: 'https://www.hdwallpapers.in/walls/autumn_bench-HD.jpg'}));

app.listen(3000, () => console.log('Example app listening on port 3000!'));