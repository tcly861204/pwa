const cacheName="pwa-step-5";
const filesToCache = [
  "/js/main.js",
  "/css/main.css",
  "/img/face.jpg",
  "/img/icon_120.png",
  "/img/icon_144.png",
  "/index.html",
  "/json/manifest.json",
  "/"
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
