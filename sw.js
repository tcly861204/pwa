const cacheName="pwa-step-3";
const filesToCache = [
  "/pwa/meta/apple-touch-icon.png",
  "/pwa/favicon.ico",
  "/pwa/css/main.css",
  "/pwa/css/fonts/clear-sans.css",
  "/pwa/img/icon_120.png",
  "/pwa/img/icon_144.png",
  "/pwa/index.html",
  "/pwa/docs/index.html",
  "/pwa/json/manifest.json",
  "/pwa/js/bind_polyfill.js",
  "/pwa/js/classlist_polyfill.js",
  "/pwa/js/animframe_polyfill.js",
  "/pwa/js/keyboard_input_manager.js",
  "/pwa/js/html_actuator.js",
  "/pwa/js/grid.js",
  "/pwa/js/tile.js",
  "/pwa/js/local_storage_manager.js",
  "/pwa/js/game_manager.js",
  "/pwa/js/application.js",
  "/pwa/css/fonts/ClearSans-Bold-webfont.woff",
  "/pwa/css/fonts/ClearSans-Regular-webfont.woff",
  "/pwa/",
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


