// Immediately Invoked Function Expressions (IIEF)

(function chai(){                                  // name iife
    console.log(`DB CONNECTED`);
})();

( (name) => {                                     //simple iife
    console.log(`DB CONNECTED OK, ${name}`);
})("hiren")

