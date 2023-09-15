/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let n = init
    return {
        increment: function (){
            n+=1
            return n;
        },
        decrement: function (){
            n-=1
            return n;
        },
        reset: function (){
            n=init
            return init;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */