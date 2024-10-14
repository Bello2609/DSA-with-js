const fs = require("fs");
// function Dictionary(){
//     this.dataStore = new Array();
//     this.add = add;
//     this.find = find;
//     this.remove = remove;
//     this.count = count;
//     this.clear = clear;
//     this.showAll = showAll;
// }
// function add(key, value){
//     this.dataStore[key] = value;
// }
// function find(key){
//     return this.dataStore[key];
// }
// function remove(key){
//     delete this.dataStore[key];
// }
// function count(){
//     let n = 0;
//     for (let key of Object.keys(this.dataStore)){
//         n++;
//     }
//     return n;
// }
// function clear(){
//     for(let key of Object.keys(this.dataStore)){
//         delete this.dataStore[key];
//     }
// }
// function showAll(){
//     for(let key of Object.keys(this.dataStore).sort()){
//         console.log(key + ":", this.dataStore[key]);
//     }
// }

// let phone = new Dictionary();
// phone.add("mike", "123");
// phone.add("david", "120");
// phone.add("tolu", "103");
// phone.add("mikel", "023");
// console.log(phone.count());
// phone.showAll();
// phone.clear();

// //Excersie1
function DictionaryP(){
    this.dataStore = new Array();
    this.addP = addP;
    this.findP = findP;
    this.removeP = removeP;
    this.countP = countP;
    this.clearP = clearP;
    this.showAllP = showAllP;
}

function addP(key, value){
    this.dataStore[key] = value;
}
function findP(key){
    return this.dataStore[key];
}
function removeP(key){
    delete this.dataStore[key];
}
function countP(){
    let n = 0;
    for (let key of Object.keys(this.dataStore)){
        n++;
    }
    return n;
}
function clearP(){
    for(let key of Object.keys(this.dataStore)){
        delete this.dataStore[key];
    }
}
function showAllP(){
    for(let key of Object.keys(this.dataStore).sort()){
        console.log(key + ":", this.dataStore[key]);
    }
}
 function getPhone(callback){
    fs.readFile("dic.txt", "utf-8", (err, data)=>{
        if(err){
            return callback(err, null);
        }
        let info = data.split("\n");
        let results = [];
        for(let i = 0; i < info.length; i++){
            let line = info[i].trim().split(" ");
            if(line.length){
                let ke = line[0];
                let valu = line[1];
                results.push([ke, valu]);
            }
        }
        callback(null, results);
    });
}
const names = new DictionaryP();
getPhone((err, result)=>{
    if(err){
        throw new Error(err);
    }else {
        result.forEach(([key, value])=>{
            names.addP(key, value);
        });
        console.log(names.countP());
        names.showAllP();
    }
})

//exercise 2
function group(string){
    let obb = {}
    const data = string.split(" ");
   for(let i = 0; i < data.length; i++){
    // const world = data[i].replace(/[.,]/g, '');
    const word = data[i].replace(/[.,]/g, '')

    if(obb.hasOwnProperty(word)){
        obb[word] += 1; 
    }else{
        obb[word] = 1
    }
   }
   console.log(obb);
    
 
}
group("the brown fox jumped over the blue fox, the output will be");
