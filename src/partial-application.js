

export default function partialApply( fn, lastArgs=[] ) {

    return function (...args) {
        
        let argstate = (function(base, override, limit){
                let a = [];

                for(let j=0, i = 0; i < limit; i++) {
                    a[i] = base[i]===undefined ? override[j++] : base[i];
                }

                return a;
            })( 
                lastArgs, 
                args,
                fn.length
            );


        return argstate.every( arg=>arg!==undefined ) ? fn.apply(this, argstate) : partialApply(fn, argstate);
    };

}