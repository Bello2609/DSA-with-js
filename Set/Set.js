//Set datas tructrue
function Set(){
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intercept = intercept;
    this.subset = subset;
    this.difference = difference;
    this.show = show;
    this.contain = contain;
    this.higher = higher;
}
function add(data){
    if(this.dataStore.indexOf(data) < 0){
        this.dataStore.push(data);
        return true;
    }
    else{
        return false;
    }
}
function remove(data){
    let pos = this.dataStore.indexOf(data);
    if(pos > -1){
        this.dataStore.splice(pos,1);
        return true;
    }
    else{
        return false;
    }
}
function show(){
    return this.dataStore.sort();
}
function contain(data){
    if(this.dataStore.indexOf(data) > -1){
        return true;
    }
    else{
        return false;
    }
}
function union(set){
    let tempSet = new Set();
    for(let i = 0; i < this.dataStore.length; ++i){
        tempSet.add(this.dataStore[i]);
    }
    for(let i  = 0; i < set.dataStore.length; ++i){
        if(!tempSet.contain(set.dataStore[i])){
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }
    return tempSet;
}
function size(){
    return this.dataStore.length;
}
function intercept(set){
    let tempSet = new Set();
    for(let i = 0; i < this.dataStore.length; ++i){
        if(set.contain(this.dataStore[i])){
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}
function subset(set){
    if(this.size > set.size()){
        return false;
    }
    else{
        for(let member of this.dataStore){
            if(!set.contain(member)){
                return false;
            }
        }
    }
    return true;
}
function difference(set){
    let tempSet = new Set();
    for(let i  = 0; i < this.dataStore.length; ++i){
        if(!set.contain(this.dataStore[i])){
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}
function higher(value){
    let smallest = value;
    for (let i = 0; i < this.dataStore.length; ++i){ 
        if((this.dataStore[i] > value) < smallest){
            smallest = this.dataStore[i];
        }
        return smallest;
    }
    
}
let names = new Set();
names.add("26");
names.add("10");
names.add("22");
names.add("29");
names.add("30");
names.add("40");

console.log(names.higher("22"));
// let dmp = new Set();
// dmp.add("Raymond");
// dmp.add("Cynthia");
// dmp.add("Jonathan");
// dmp.add("titilope");

// let it = new Set();
// it = dmp.difference(names);
// console.log(it.show());


// exercise 1
//Add the function higher(element) to the Set class. This function returns the least
//element in the set strictly greater than the given element.


