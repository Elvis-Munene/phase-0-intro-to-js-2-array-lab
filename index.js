// Write your solution here!
// var cats = [];
const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);


function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}
console.log(destructivelyAppendCat("cat"));


function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
console.log(destructivelyPrependCat("cat"));

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
console.log(destructivelyRemoveLastCat());


function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
console.log(destructivelyRemoveFirstCat());

var var_1;
function appendCat(name){
    var_1 = [...cats,"Broom"];
    return var_1;
}
console.log(appendCat());


var var_2;
function prependCat(name){
    var_2 = ["Arnold",...cats];
    return var_2;
}
console.log(prependCat());

var var_3;
function removeLastCat(){
    var_3 = cats.slice(0,cats.length-1);
    return var_3;
}
console.log(removeLastCat());
var var_4;
function  removeFirstCat(){
    var_4 = cats.slice(1);
    return var_4;
}
console.log(removeFirstCat());
