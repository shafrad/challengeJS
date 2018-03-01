function even(number) {
    for(var i = 0; i <= number; i++) {
        if(i % 2 === 0) {
       console.log(i)
        }
    }
}
var event = []
event.push(even(100))
console.log('\n')

function odd(number) {
    for(var i = 0; i <= number; i++) {
        if(i % 2 !== 0) {
            console.log(i)
        }
    }
}
odd(100)
console.log('\n')

function multiply(number) {
    for(var i = 0; i <= 100; i++) {
        console.log(i * 5)
    } 
}
multiply(5)
console.log('\n')

function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}
for(var i = 0; i <= 100; i++){
    if(isPrime(i)) console.log(i);
}
