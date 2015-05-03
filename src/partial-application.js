

export default function partialApply( fn, lastArgs ) {

    return function (...args) {
        
        let argstate = (function(base, override){
                let a = [];

                for(let j=0, i = 0; i<base.length; i++) {
                    a[i] = base[i]===undefined ? override[j++] : base[i];
                }

                return a;
            })( 
                Array.isArray( lastArgs ) ? lastArgs : Array(fn.length), 
                args
            );


        return argstate.every( arg=>arg!==undefined ) ?
            fn.apply(this, argstate) :
            partialApply(fn, argstate);
    };

}