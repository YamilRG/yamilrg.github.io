//Archivo js/sw-acces.js
//3. Hacer una función para actualizar el cache dinamico cuando algo no se encuentre en el APP_SHELL

function actualizaCacheDinamico(dynamicCache, request, response){
    if(response.ok){
        //la respuesta tiene data y se debe almacaenar en cache
        caches.open(dynamicCache).then(cache =>{
            cache.put(request, response.clone() );
        });
        return dynamicCache;
    }else{//si no viene nda en la respuesta
        return response;
    }
}