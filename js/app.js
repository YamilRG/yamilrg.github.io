var url = window.location.href;
var pwaLocation = 'https://yamilrg.github.io/sw.js';

if(navigator.serviceWorker){
    if(url.includes('localhost')){
        pwaLocation = '/sw.js';
    }
    navigator.serviceWorker.register(pwaLocation);
}