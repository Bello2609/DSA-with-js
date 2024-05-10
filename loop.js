
// the use of while loop to sum the integers 1 through 10
const loop = (sum, number)=>{
    while(number < 11){
        sum += number;
        ++number;
    }
    return sum;
}
console.log(loop(0, 1)); // display 55

//use a for loop to sum the integers 1 through 10.
const forLoop = (sun, numb)=>{
    for(let num = numb; num < 11; num++){
        sun += num
    }
    return sun;
}
console.log(forLoop(0, 1)); // displays 55

const factorial = (number, product)=>{
    for(let i = number; i >= 1; --i ){
        product *= i;
    }
    return product
}
console.log(factorial(4, 1));
//using recursive function to solve factorial
const recursive =(number)=>{
    if(number ==1){
        return number;
    }else {
        return number * recursive(number - 1);
    }

}
console.log(recursive(5));