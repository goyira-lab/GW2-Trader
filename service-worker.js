const CACHE="gw2-trader-v4-3";
self.addEventListener("install",e=>{self.skipWaiting();});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))));self.clients.claim();});
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(u.hostname==="api.guildwars2.com"){e.respondWith(fetch(e.request,{cache:"no-store"}));return;}e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));});