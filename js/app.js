var url = window.location.href;
var pwaLocation = 'https://yamilrg.github.io/PWA-Individual/sw.js';

if(navigator.serviceWorker){
    if(url.includes('localhost')){
        pwaLocation = '/sw.js';
    }
    navigator.serviceWorker.register(pwaLocation);
}