function Stack (){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}
function push(element){
    this.dataStore[this.top++] = element;
}
function peek(){
    return this.dataStore[this.top-1];
}
function pop(){
    return this.dataStore[--this.top];
}
function clear(){
    this.top = 0;
}
function length(){
    return this.top;
}
const s = new Stack();
s.push("bello");
s.push("hadi");
s.push("dolapo");
s.push("aremu");
console.log("length " + s.length());
console.log(s.peek());
let pp = s.pop();
console.log(pp);
s.push("aremu");
console.log(s.dataStore);
//function to convert a number to any base

function convertToAnyBase(num, base){
    let s = new Stack();
    do{
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
        let converted = "";
        while(s.length() > 0){
            converted += s.pop();
        }
        return converted;
}
console.log(convertToAnyBase(5, 2));
//function to check if a string a palindrome
function isPalindrome(word){
    let s  = new Stack();
    for(let i = 0; i < word.length; i++){
        s.push(word[i]);
    }
    let rWord = "";
    while (s.length() > 0){
        rWord += s.pop();
    }
    if(word == rWord){
        return true;
    }else{
        return false;
    }
}
console.log(isPalindrome("madam"));
// recursioin function
function factorial(n){
    if (n=== 0){
        return 1;
    }
    else{
        return n * factorial(n-1)
    }
}
console.log(factorial(12));
// recursion with stack
function fact(n){
    let s = new Stack();
    while (n > 1){
        s.push(n--);
    }
    let product = 1;
    while(s.length() > 0){
        product *= s.pop();
    }
    return {
        result: product
    };
}
console.log(fact(12));


//Exercise 1
function parenthesis(arit){
    let s = new Stack();
    let splitWords = arit.split(" ");
    let position = 0;
    for(let i = 0; i < splitWords.length; i++){
        s.push(splitWords[i]);
       if(splitWords[i].includes("(")){
        position += splitWords.indexOf(splitWords[i]);
       }
    }
    return position;
}
console.log(parenthesis("2.3 + 23 / 12 + (3.14159*.24"));
//Exercise 2 postfix expression
function evaluatePostFix (num){
    let s = new Stack();
    for(let i = 0; i < num.length; i++){
        let c = num[i]
        // if the scanned character is a number push to stack else perform operation
        if(!isNaN(parseInt(c))){
            console.log(parseInt(c));
            s.push(c.charCodeAt(0) - '0'.charCodeAt(0));
        } else{
            let first = s.pop();
            let second = s.pop();
            if(c == "+"){
                s.push(second + first);
            }else if(c == "-"){
                s.push(second - first);
            }else if(c == "*"){
                s.push(second*first);
            }else if(c == "/"){
                s.push(second / first);
            }
        }
    }
    return s.pop();
}
console.log(evaluatePostFix("231*+9-"));

//exercise 3
function removeYellow(){
    let s = []
    let n = []
    s.push("red");
    s.push("yellow");
    s.push("white");
    for(let i = 0; i < s.length; i++){
        let data = s[i];
        if(data === "yellow"){
            let colorToRemove = s.indexOf(data);
            n.push(s[colorToRemove])
        }
    }
    console.log(n);

}
removeYellow();

