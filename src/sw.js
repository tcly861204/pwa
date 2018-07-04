const cacheName="pwa-step-4";
const filesToCache = [
  "/js/basic.js",
  "/css/main.css",
  "/favicon.ico",
  "/img/face.jpg",
  "/index.html",
  "/",
];

function updateStaticCache(){
  return caches.open(cacheName)
  .then(function(cache){
    return cache.addAll(filesToCache);
  })
  .then(()=>self.skipWaiting());
}

self.addEventListener('install',function(event){
  event.waitUntil(updateStaticCache());
},false);

self.addEventListener('activate',function(event){
  event.waitUntil(caches.keys().then(function(keysList){
    return Promise.all(keysList.map(function(key){
        if(key !== cacheName){
            return caches.delete(key);
        }
    }));
  }));
},false);

self.addEventListener('fetch',function(event){
  event.respondWith(
    caches.match(event.request).then(function(response){
      if(response!==null){
        return response;
      }
      return fetch(event.request.url);
    })
  )
},false);
