//immediately invoked function expressions (IIFE)

(function chai() {                             //named IIFE
    console.log('db connected');
    
})();
// (function chaiaurcode() {
//     console.log('db connected 2');
    
// })()

((name)=>{console.log(`db connected ${name}`)
})("VIDHYA")


//*****************************************JAVASCRIPT EXECUTION CONTEXT*******************************************************
// GLOBAL EXECUTION CONTEXT
// FUNCTION EXECUTION CONTEXT
// EVAL EXECUTION CONTEXT