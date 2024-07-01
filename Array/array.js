
// const multiArray = (grades)=>{
    
// let total = 0;
// let average = 0.0;

// for(let row = 0; row < grades.length; ++row){
//     for(let col = 0; col < grades[row].length; ++col){
//         total += grades[row][col];
        
//     }
//     console.log(total);
//     average = total/ grades[row].length;
//     console.log("student" + parseInt(row+1) + "average" + average.toFixed(2));
//     total = 0;
//     average = 0.0;

// }
// }
// console.log(multiArray([[89, 77, 78], [76, 82, 81], [91, 94, 89]]));
// // exercise1
// // Create a grades object that stores a set of student grades in an object. Provide a
// //function for adding a grade and a function for displaying the student’s grade average
// function studentGrade(){
//     this.grade = [];
//     this.add = add;
//     this.average = average;
// }
// function add(temp){
//     return this.grade.push(temp);
// }
// function average(){
//     let total = 0;
//     let average = 0.0;
//     for(let i = 0; i < this.grade.length; ++i){
//         total += this.grade[i];
//     }
//     return average = total / this.grade.length
// }

// const allGrade = new studentGrade();
// allGrade.add(23);
// allGrade.add(12);
// allGrade.add(43);
// allGrade.add(78);
// console.log("this is the student grade" + " " + allGrade.average());
// // exercise 2
// // Store a set of words in an array and display the contents both forward and backward.
// const wordReverse = (accWord, word)=>{
//     return accWord + word;
// }
// let myWords = ["ade ", "is ", "a ", "good ", "boy "];
// console.log(myWords.reduce(wordReverse));
// console.log(myWords.reduceRight(wordReverse));

// //Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
// //data using a two-dimensional array. Create functions to display the monthly aver‐
// //age, a specific week’s average, and all the weeks’ averages.
// function weekTemp() {
//     this.dataStore = [];
//     this.add = add;
//     this.monthlyAverage = monthlyAverage;
//     this.weeklyAverage = weeklyAverage;
//     this.specificAverage = specificAverage;
// }
// function add(temp) {
//     const aray = [...this.dataStore];
//     return aray.push(temp)
// }
// function monthlyAverage(){
//     let total = 0;
//     let average = 0.0;
//     for (let row = 0; row < this.dataStore.length; ++row) {
//         for(let col = 0; col < this.dataStore[row].length; ++col){
//             return total += this.dataStore[row][col];
//         }
//     }
//     average = total / this.dataStore.length;
//         console.log("This month average is" + "" + average.toFixed(2));
//         total = 0;
//         average = 0.0;
   
// }
// function weeklyAverage(){
//     let total = 0;
//     let average = 0.0;
//     for (let row = 0; row < this.dataStore.length; ++row) {
//         for(let col = 0; col < this.dataStore[row].length; ++col){
//             return total += this.dataStore[row][col];
//         }
//         average = total / this.dataStore[row].length;
//         console.log("week" + parseInt(row+1) + "" + average.toFixed(2));
//         total = 0;
//         average = 0.0;
//     }

// }
// function specificAverage() {
//     let total = 0;
//     let average = 0.0;
//     for (let row = 0; row < this.dataStore.length; ++row) {
//         for(let col = 0; col < this.dataStore[row].length; ++col){
//             return total += this.dataStore[row][col];
//         }
        
//     }
//     average = total / this.dataStore.length - 1;
//         console.log("week" + parseInt(row+1) + "" + average.toFixed(2));
//         total = 0;
//         average = 0.0;

// }
// const allWeek = new weekTemp();
// allWeek.add([12,23,45,34,23,45,23]);
// allWeek.add([12,34,56,76,43,21,34]);
// allWeek.add([23,45,67,44,33,22,44]);
// allWeek.add([76,54,33,22,66,77,55]);
// console.log(allWeek.monthlyAverage());
// console.log(allWeek.weeklyAverage());
// console.log([allWeek.specificAverage()]);
let oop = {};
const data = {
  name: [ 'shirt' ],
  price: [ '20' ],
  category: [ 'electronics' ],
  sku: [ 'dfmms' ]
}
let gender = Object.keys(data);
gender.map(ww=>{
  oop[ww] = data[ww][0]
  // console.log(data[ww][0])
})
console.log(oop);
