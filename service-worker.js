const staticCacheName = 'akib-portfolio-static-cache-v2';

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(staticCacheName).then((cache) => {
			return cache.addAll([
				'/',
				'/index.html',
				'/src/main.jsx',
				'/public/logo.png',
				'/manifest.json',
				// Add more assets to precache here
				'/styles/main.css',
				'/scripts/main.js',
				// Add other assets like images, fonts, etc.
			]);
		})
	);
});

self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			return (
				response ||
				fetch(event.request).then((fetchResponse) => {
					// Cache dynamic responses if needed
					return caches.open(staticCacheName).then((cache) => {
						cache.put(event.request, fetchResponse.clone());
						return fetchResponse;
					});
				})
			);
		})
	);
});
