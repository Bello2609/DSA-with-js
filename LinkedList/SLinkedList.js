function Node(element){
    this.element = element;
    this.next = null;
}
function LList(){
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
    this.advance = advance;
    this.show = show;
}

function find(item){
    let currNode = this.head;
    while(currNode.element != item){
        currNode = currNode.next;
    }
    return currNode;
}
function findPrevious(item){
    let currNode = this.head;
    while(!(currNode.next == null) && (currNode.next.element != item)){
        currNode = currNode.next;
    }
    return currNode;
}
function remove(item){
    let prevNode = this.findPrevious(item);
    if(!(prevNode.next == null)){
        prevNode.next = prevNode.next.next
    }
}
function insert(newElement, item){
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}
function display(){
    let currNode = this.head;
    while(!(currNode.next == null)){
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
   
}
function advance(n, item){
    let count  = 0;
    let current = this.find(item);
    while((current.next != null) && (count < n)){
        count++;
        current = current.element;
    }
    return current;
}
function show(n, item){
    let count  = 0;
    let current = this.find(item);
    while((current.next != null) && (count < n)){
        count++;
        return current;
    }
}

let cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Russellville");
cities.insert("Almamatata", "Alma");
console.log(cities.remove("Carlisle"));
console.log(cities.display());
console.log("mymy: ",cities.advance(2, "Russellville"));
