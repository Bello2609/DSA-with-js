// function HashTable(){
//     this.table = new Array(137);
//     // this.simpleHash = simpleHash;
//     this.betterHash = betterHash;
//     this.showDistro = showDistro;
//     this.put = put;
// }
// function put(data){
//     let pos = this.simpleHash(data);
//     this.table[pos] = data; 
// }
// function simpleHash(data){
//     let total = 0;
//     for(let i = 0; i < data.length; ++i){
//         total += data.charCodeAt(i);
//     }
//     console.log("Hash value: " + data + " -> " + total);
//     return total % this.table.length;
// }
// function betterHash(data){
//     let total = 0;
//     const H = 37;
//     for(let i = 0; i < data.length; ++i){
//         total += H * total + data.charCodeAt(i);
//     }
//     total = total % this.table.length;
//     if(total < 0){
//         total += this.table.length - 1;
//     }
//     console.log("Hash value: " + data + " -> " + total);
//     return parseInt(total);
// }
// function showDistro(){
//     let n = 0;
//     for(let i  = 0; i < this.table.length; ++i){
//         if(this.table[i] != undefined){
//             console.log(i + ": " + this.table[i]);
//         }
//     }
// }
// let someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
// let hTable = new HashTable();
// for(let i = 0; i < someNames.length; ++i){
//     hTable.put(someNames[i]);
// }
// hTable.showDistro();

// // generate random grade
// function getRandomInt(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function genStuData(arr){
//     for(let i = 0; i < arr.length; ++i){
//         let num = 0;
//         for(let w = 1; w <= 9; ++w){
//             num += Math.floor(Math.random() * 10);
//         }
//         num += getRandomInt(50, 100);
//         arr[i] = num;
//     }
// }

// let numStudents = 10;
// let arrSize = 97;
// let idLen = 9;
// let students = new Array(numStudents);
// console.log("Student data: ");
// for(let i = 0; i < students.length; ++i){
//     console.log(students[i] );
// }
// console.log("Data Distribution: ");
// let hhTable = new HashTable();
// for(let i = 0; i < students.length; ++i){
//     hhTable.put(students[i]);
// }
// hhTable.showDistro();


// //Exercise
// function LHash(){
//     this.table = new Array(137);
//     this.put = put;
//     this.showDistro = showDistro;
//     this.put = put;
//     this.get = get;
//     this.betterHash = betterHash;
//     this.value = [];
// }
// function put(key, data){
//     let pos = this.betterHash(key);
//     if(this.table[pos] == undefined){
//         this.table[pos] = key;
//         this.value[pos] = data;
//     }else{
//         while(this.table[pos] != undefined){
//             pos++
//         }
//         this.table[pos] = key;
//         this.value[pos] = data;
//     }

// }
// function get(key){
//     let hash = -1;
//     hash = this.betterHash(key);
//     if(hash > -1){
//         for(let i = hash; this.table[hash] != undefined; i++){
//             if(this.table[hash] == key){
//                 console.log("get: ", this.value[hash]);
//                 return this.value[hash]
                
//             }
//         }
//     }
//     return undefined;
// }

// function betterHash(data){
//     let total = 0;
//     const H = 37;
//     for(let i = 0; i < data.length; ++i){
//         total += H * total + data.charCodeAt(i);
//     }
//     total = total % this.table.length;
//     if(total < 0){
//         total += this.table.length - 1;
//     }
//     console.log("Hash value: " + data + " -> " + total);
//     return parseInt(total);
// }
// function showDistro(){
//     let n = 0;
//     for(let i  = 0; i < this.table.length; ++i){
//         if(this.table[i] != undefined){
//             console.log(i + ": " + this.table[i]);
//         }
//     }
// }

// const lhash = new LHash();
// const someData = [
//     {
//         "word": "door",
//         "meaning": "sdkcnsdkcnskdncksdnkcsd1"
//     },
//     {
//         "word": "ball",
//         "meaning": "sdkcnsdkcnskdncksdnkcsd2"
//     },
//     {
//         "word": "cake",
//         "meaning": "sdkcnsdkcnskdncksdnkcsd3"
//     },
//     {
//         "word": "house",
//         "meaning": "sdkcnsdkcnskdncksdnkcsd4"
//     },

// ]

// for(let i = 0; i < someData.length; i++){
//     let key = someData[i].word;
//     let data = someData[i].meaning;
//     lhash.put(key, data);
//     console.log(key);
// }
// lhash.showDistro();
// lhash.get("door");

//Exercise 2
// seperate chaining

function CHash(){
    this.table = new Array(137);
    // this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
    this.buildChain = buildChain
}
function buildChain(){
    for(let i = 0; i < this.table.length; ++i){
        this.table[i] = new Array();
    }
}
function betterHash(data){
    let total = 0;
    const H = 37;
    for(let i = 0; i < data.length; ++i){
        total += H * total + data.charCodeAt(i);
    }
    total = total % this.table.length;
    if(total < 0){
        total += this.table.length - 1;
    }
    console.log("Hash value: " + data + " -> " + total);
    return parseInt(total);
}
function showDistro(){
    let n = 0;
    for(let i = 0; i < this.table.length; ++i){
        if(this.table[i][0] != undefined){
            console.log(i + ": " + this.table[i]);
        }
    }
}
function put(key, data){
    let pos = this.betterHash(key);
    let index = 0;
    if(this.table[pos][index] == undefined){
        this.table[pos][index + 1] = data;
    }
    else{
        while(this.table[pos][index] != undefined){
            ++index;
        }
        this.table[pos][index] = data;
    }
}
function get(){
    let index = 0;
    let hash = this.betterHash(key);
    if(this.table[pos][index] = key){
        return this.table[pos][index]
    }
    else{
        while(this.table[pos][index] != key){
            index += 2;
        }
        return this.table[pos][index + 1];
    }
    return undefined;
}