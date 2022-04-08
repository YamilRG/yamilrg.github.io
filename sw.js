const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'Dynamic-v1';
const INMUTABLE_CACHE = 'Inmutable-v1';
const APP_SHEll = [
    '/', 
    'index.html', 
    'css/style.css', 
    'favicon.ico',
    'js/app.js']; 

const APP_IMMUTABLE = ['https://fonts.googleapis.com/css?family=Quicksand:300,400','https://fonts.googleapis.com/css?family=Lato:400,300','https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css','js/libs/jquery.js'];



self.addEventListener('install', event => {
    const cacheStatic = caches.open(STATIC_CACHE).then(cache => {
        cache.addAll(APP_SHEll);
    });
    const cacheInm  =caches.open(INMUTABLE_CACHE).then(cache => {
        cache.addAll(APP_IMMUTABLE);
    });
    event.waitUntil(Promise.all([cacheStatic, cacheInm]));
    
});
importScripts('js/sw-acces.js');

//Activacion

self.addEventListener('activate', event => {
    const respuesta = caches.keys().then(keys =>{
        keys.forEach(key => {
            if(key !== STATIC_CACHE && key.includes('static')){
                return caches.delete(key);
            }
        });
    });
    event.waitUntil(respuesta);
});


//Estrategia de Cache

	
self.addEventListener('fetch', event => {
    const respuesta = caches.match(event.request).then( res => {
        if(res){return res;}
        else{
            return fetch(event.request).then(newRes => {
                return actualizaCacheDinamico(DYNAMIC_CACHE, event.request, newRes);
            });
        }
    });
});

