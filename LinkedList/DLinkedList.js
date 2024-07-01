//doubly likedlist

function NodeD(element){
    this.element = element;
    this.next = null;
    this.previous = null;
}
function Dlist(){
    this.head = new NodeD("head");
    this.insert = insert;
    this.remove = remove;
    this.findLast = findLast;
    this.find = find;
    this.dispReverse = dispReverse;
}

function insert(newElement, item) {
    let newNode = new NodeD(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}
function find(item){
    let currNode = this.head;
    while(currNode.element != item){
        currNode = currNode.next;
    }
    return currNode;
}
function remove(item){
    let currNode = this.find(item);
    if(!(currNode.next == null)){
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}
function findLast(){
    let currNode = this.head;
    while(!(currNode.next == null)){
        currNode = currNode.next;
    }
    return currNode;
}
function dispReverse(){
    let currNode = this.head;
    currNode = this.findLast();
    while(!(currNode.previous == null)){
        console.log(currNode.element);
        currNode = currNode.previous
    }
}

let cities = new Dlist();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Russellville");
console.log(cities.remove("Carlisle"));
console.log(cities.dispReverse());



//exercise