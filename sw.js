const cacheName="pwa-step-9";
const filesToCache = [
  "/pwa/meta/apple-touch-icon.png",
  "/pwa/favicon.ico",
  "/pwa/css/main.css",
  "/pwa/css/fonts/clear-sans.css",
  "/pwa/img/icon_120.png",
  "/pwa/img/icon_144.png",
  "/pwa/img/qrcode.png",
  "/pwa/index.html",
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
  "/pwa/docs/",
  "/pwa/docs/index.html",
  "https://dn-maxiang.qbox.me/res-min/themes/marxico.css",
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


self.addEventListener('push', function (e) {
  var data = e.data;
  if (e.data) {
      data = data.json();
      console.log('push的数据为：', data);
      var title = 'PWA即学即用';
      var options = {
          body: data,
          icon: '/pwa/img/icon_120.png',
          image: '/pwa/img/icon_120.png', // no effect
          actions: [{
              action: 'show-book',
              title: '去看看'
          }, {
              action: 'contact-me',
              title: '联系我'
          }],
          tag: 'pwa-starter',
          renotify: true
      };
      self.registration.showNotification(title, options);
  }
  else {
      console.log('push没有任何数据');
  }
});