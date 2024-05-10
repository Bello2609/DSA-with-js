function List(){
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains  = contains; 
}
//add element to a list
function append(element){
    this.dataStore[this.listSize++] = element;
}
// remove an element from a list, we look for the index
function find(elem){
     for(let i = 0; i < this.dataStore.length; ++i){
        if(this.dataStore[i] == elem){
            return i;
        }
     }
     return -1;
}
//then we write the remove func
function remove(){
    let foundAt = this.find(elem);
    if(foundAt > -1){
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}
//determine the number of list 
function length(){
    this.listSize;
}
//view all the element in a list we use the toString func
function toString(){
    return this.dataStore;
}
//insert an element into a list
function insert(element, after) {
    let insertPos = this.find(after);
    if(insertPos > -1){
        this.dataStore.splice(insertPos + 1, 1, element);
        ++this.listSize;
        return true;
    }
    return false;
}
//clear all element in the list
function clear(){
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}
//check if a value is in a list
function contains(element){
    for(let i = 0; i < this.dataStore.length; ++i){
        if(this.dataStore[i] == element){
            return true;
        }
    }
    return false;
}
//traversing a list
//front
function front(){
    this.pos = 0;
}
//end
function end(){
    this.pos = this.listSize - 1;
}
//prev  
function prev(){
    if (this.pos > 0){
        --this.pos;
    }
}
//next
function next(){
    if(this.pos < this.listSize-1){
        ++this.pos;
    }
}
//current position 
function currPos(){
    return this.pos;
}
// move to a certain position 
function moveTo(position){
    this.pos = position;
} 
// get element
function getElement(){
    return this.dataStore[this.pos];
}
// const myList  = new List();
// myList.append("nigga");
// myList.append("hello");
// myList.append("whats good");
// myList.front();
// console.log(myList.getElement());
// console.log(myList.toString());

// video rental kiosk practise
let movies = [
    "The Shawshank Redemption", 
`    "The Godfather",
    "The Godfather: Part II",
    "Pulp Fiction",
    "The Good, the Bad and the Ugly",
    "Angry Men",
    "Schindler's List",
    "The Dark Knight",
    "The Lord of the Rings: The Return of the King",
    "Fight Club",
    "Star Wars: Episode V - The Empire Strikes Back",
    "One Flew Over the Cuckoo's Nest",
    "The Lord of the Rings: The Fellowship of the Ring",
    "Inception",
    "Goodfellas",
    "Star Wars",
    "Seven Samurai",
    "The Matrix",
    "Forrest Gump",
    "City of God"`
]
// customer 
function Customer(name, movie){
    this.name = name;
    this.movie = movie;
}
//display all list 
function displayList(list){
    for(list.front(); list.currPos < list.length(); list.next()){
        if(list.getElement() instanceof Customer){
            console.log(list.getElement()["name"] + ", " + list.getElement()["movie"]);
        }
    }
}
//checkout for a movie
function checkOut(name, movie, filmList, customerList){
    if(movieList.contains(movie)){
        let c = new Customer(name, movie);
        customerList.append(c);
        filmList.remove(movie);
    }else{
        console.log(movie + " is  not available");
    }
}
//
let movieList = new List();
for(let i = 0; i < movies.length; i++){
    movieList.append(movies[i]);
}
let customers  = new List();
console.log(displayList(movieList));
console.log(checkOut("jane joe", "The God Father", movieList, customers));
console.log(displayList(customers));
