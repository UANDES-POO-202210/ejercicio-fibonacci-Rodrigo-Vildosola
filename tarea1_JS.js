function fibonacci(num_str){
    f0 = 0;
    f1 = 1;
    console.log("F(0) = %d", f0);
    console.log("F(1) = %d", f1);
    let temp;
    for (var i = 2; i <= num_str; i++){
        let f2 = f0 + f1;
        console.log("F(%d) = %d", i, f2);
        temp = f1;
        f1 = f2;
        f0 = temp;
    }
}

var fs = require('fs');
let number = fs.readFileSync('number.txt', 'utf-8') 
console.log("\nEl numero ingresado es: %d", number);
fibonacci(number);
console.log()

