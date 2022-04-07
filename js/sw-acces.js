function actualizarCacheDinamico(dynamicCache, request, response){
    if(response.ok){
        caches.open(dynamicCache).then(cache =>{
        
        cache.put(request, response.clone());
            
        });
        return dynamicCache.clone();
    }else{
        return response;
    }
}