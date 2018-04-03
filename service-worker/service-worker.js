const CACHE_VERSION = 'v1',
	CACHE_FILES = [
	'/img.jpg',
	'/script.js'
];

self.addEventListener('install', e => {
	console.log('[Service Worker] Installed');
	e.waitUntil(caches.open(CACHE_VERSION).then(cache => {
	console.log('[Service Worker] Cashing files');
		cache.addAll(CACHE_FILES)
	}));
});

self.addEventListener('activate', e => {
	console.log('[Service Worker] Activated');
	e.waitUntil(caches.keys().then(cacheNames => Promise.all(cacheNames.map(CURRENT_CACHE => {
		if(CURRENT_CACHE !== CACHE_VERSION) {
			console.log('[Service Worker] Removing Cached Files from Cache - ', CURRENT_CACHE);
			return caches.delete(CURRENT_CACHE);
		}
	}))));
});

self.addEventListener('fetch', e => {
	console.log('[Service Worker] Fetching', e);

	e.respondWith(
		caches.match(e.request).then(resp => {
			if(resp) {
				console.log('[Service Worker] Found in cache', e.request.url);
				return resp;
			}

			const fetchRequest = e.request.clone();

			return fetch(fetchRequest).then(
				function(response) {
					if(!response || response.status !== 200 || response.type !== 'basic') {
						return response;
					}

					const responseToCache = response.clone();
					caches.open(CACHE_VERSION).then(cache => cache.put(e.request, responseToCache));

					return response;
				}
			);
		})
	)
});