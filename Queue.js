const fs = require("fs");
function Queue(){
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.toStringg = toStringg;
    this.empty = empty;
    this.count = count;
}
function enqueue(element){
    this.dataStore.push(element);
}
function dequeue(){
    return this.dataStore.shift();
}
function deQueue(){
    let priority = this.dataStore[0].code
    for(let i = 0; i < this.dataStore.length; ++i){
      if(this.dataStore[i].code < priority){
        priority  = i;
      }  
    }
    return this.dataStore.splice(priority, 1 );
}
function front(){
    return this.dataStore[0];
}
function back(){
    return this.dataStore[this.dataStore.length - 1];
}
function toString(){
    let retStr = "";
    for (let i = 0; i < this.dataStore.length; i++){
        retStr += this.dataStore[i] + "/n"
    }
    return retStr;
}
function toStringg(){
    let reStr = "";
    for(let i = 0; this.dataStore.length; ++i){
        reStr += this.dataStore[i] + " code: "
        reStr += this.dataStore[i] + "\n";
    }
    return reStr;
}
function empty(){
    if(this.dataStore.length == 0){
        return true;
    }
    return false;
}
function count(){
    return this.dataStore.length;
}
function Dancer(name, sex){
    this.name = name;
    this.sex = sex;
}
function getDancers(males, females){
    fs.readFile("file.txt", "utf8", (err, data)=>{
        if(err){
            return
        }
        let names = data.split("\n");
        for(let i = 0; i < names.length; i++){
            names[i] = names[i].trim();
        }
        for(let i = 0; i < names.length; i++){
            let dancer = names[i].split(" ")
            let sex = dancer[0];
            let name  = dancer[1];
            if(sex == "F"){
                females.enqueue(new Dancer(name, sex));
            }
            else{
                males.enqueue(new Dancer(name, sex));
            }
        }
    })
}
function dance(male, female){
    console.log("the dance partners are");
    while(!female.empty() && !male.empty()){
        person = female.dequeue();
        person = male.dequeue();
    }
}
let maleDancers = new Queue();
let femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);

//radix sort
function distribute(nums, queues, n, digit){
    for(let i = 0; i < n; ++i){
        if(digit == 1){
            queues[nums[i]%10].enqueue(nums[i]);
        }else{
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}
function collect(queues, nums){
    let i = 0;
    for(let j = 0; j < 10; ++j){
        while(!queues[i].empty()){
            nums[i++] = queues[j].dequeue();
        }
    }
}
function dispArray(arr){
    for(let i = 0; i < arr.length; ++i){
        console.log(arr[i] + " ");
    }
}

let queues = [];
for(let i = 0; i < 10; ++i){
    queues[i] = new Queue();
}

let nums = [];
for(let i = 0; i < 10; ++i){
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
console.log("Before radix sort: ");
dispArray(nums);
// distribute(nums, queues, 10, 1);
// collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log("\n\nAfter radix sort: ");
dispArray(nums);

//PRIORITY QUEUE
function Patient(name, code){
    this.name = name;
    this.code = code;
}
// let p = new Patient("Smith",5);
// let ed = new Queue();
// ed.enqueue(p);
// p = new Patient("Jones", 4);
// ed.enqueue(p);
// p = new Patient("Fehrenbach", 6);
// ed.enqueue(p);
// p = new Patient("Brown", 1);
// ed.enqueue(p);
// p = new Patient("Ingram", 1);
// ed.enqueue(p);
// console.log(ed.toStringg());
// let seen = ed.deQueue();
// console.log("Patient being treated: " + seen[0]);
// console.log("Patients waiting to be seen: ")
// console.log(ed.toStringg());
// another round


//EXERCISE 1
function Deque(){
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
}
function enqueue (ele){
    this.dataStore.push(ele);
}
function dequeue(){
    return this.dataStore.shift();
}
let p = new Deque();

//EXERCISE 2
//CHECK IF THE GIVEN WORD IS A PALINDROME
function isPalindrome(){
    let p = new Deque();
    let word = p.dequeue();
    let rWord = [];
    let r_Word = ""
    for (let i = 0; i < word; i++){
        rWord.push(word[i]);
    }
    while(rWord.length > 0){
        r_Word += rWord.pop(); 
    }
    if(word == rWord){
        return true;
    }
    return false

}
//exercise 3
function Priority(){
    this.dataStore = [];
    this.dequeue = dequeue;
    this.enqueue = enqueue;
    this.front = front;
    this.toString = toString;
}
function dequeue(){
    let priority = this.dataStore[0].code;
    let position = 0;
    console.log("dequeue: " + priority);
    for(let i = 0; i < this.dataStore.length; i++){
        if(this.dataStore[i].code > priority){
            priority = this.dataStore[i].code;
            position += this.dataStore.findIndex(x => x.code === priority);
            console.log("the position is :" + position);
            console.log("highest priority: " + priority);
        }
    }
    return this.dataStore.splice(position, 1);
}
function enqueue(name, code){
    return this.dataStore.push({name: name, code: code});
}
function front(){
    return  this.dataStore[0];
}
function toString(){
    let reStr = "";
    for(let i = 0; i < this.dataStore.length; i++){
        reStr += this.dataStore[i].name + "code: ";
        reStr += this.dataStore[i].name + "\n";
    }
}
let w = new Priority();
w.enqueue("hadi", 12);
w.enqueue("sdbj", 10);
w.enqueue("76hdf", 15);
w.enqueue("dv44", 14);
console.log(w.dequeue());
console.log(w);
// p.enqueue("we");
// p.enqueue("are");
// p.enqueue("not");
// p.enqueue("okay");
// console.log(isPalindrome());




