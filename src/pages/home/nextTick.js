export const nextTick = (function(){
    const callback = [];
    let pending = false;
    let timerFunc;

    function nextTickHandler(){
        pending = false;
        const copies = callback.slice(0);
        callback.length = 0;
        for(let i = 0;i<copies.length;i++){
            copies[i]();
        }
    }

    if(typeof Promise !== 'undefined' && isNative(Promise)){

    }
})();
