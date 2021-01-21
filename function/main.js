"use strict"
/*
function oneline() {
    console.log("---------------------------------------------");
}

const begruessung = function(vorname = "Max", nachname = "Mustermann", alter = 55) {
    console.log(`Dein Name ist ${vorname} ${nachname} und du bist ${alter} Jahre alt.`)
};

let vorname1 = "Nok";
let nachname1 = "NokNok";
let alter1 = 88;

begruessung();
oneline();
begruessung(vorname1,nachname1,alter1)
oneline();




function rechnen(a,b,c) {
    c = a + b;
    console.log(`Das Ergebnis der Addition ist ${a} + ${b} ist ${c}.`);
    c = a - b;
    console.log(`Das Ergebnis der Subtraktion ist ${a} - ${b} ist ${c}.`);
    c = a * b;
    console.log(`Das Ergebnis der Multiplikation ist ${a} * ${b} ist ${c}.`);
    c = a / b;
    console.log(`Das Ergebnis der Division ist ${a} / ${b} ist ${c}.`);
}

rechnen(12,4);
oneline();



const rechnen_2 = function(zahl1,zahl2) {
    return zahl1 * zahl2;
};

let z1 = 12;
let z2 = 13;

let ergebnis = rechnen_2(z1,z2);
console.log(ergebnis);
let ergebnis2 = rechnen_2(ergebnis,ergebnis);
console.log(ergebnis2);
oneline();




function addition(numbOne,numbTwo) {
    return numbOne + numbTwo;
}

let numb_1 = 55;
let numb_2 = 22;

let result = addition(numb_1,numb_2);
console.log(result);
let result_1 = addition(result,numb_2);
console.log(result_1);
let result_3 = addition(result_1,result_1);
console.log(result_3);
oneline();




function fullName(firstName,lastName,ageyear) {
    if (age <= 40) {
        console.log(`Your name is ${firstname} ${lastname} and you are ${age} years young.`);
    } else {
        console.log(`Your name is ${firstname} ${lastname} and you are ${age} years old.`);
    };
    
};

let firstname = prompt("Enter your first name:");
let lastname = prompt("Enter your last name:");
let age = prompt("Enter your age:");

fullName(firstname,lastname,age);
oneline();




function add(n1, n2) {
    let erg = n1 + n2;
    console.log(erg);
}

add(22, 2);
oneline();



function full_name(vorname2, nachname2){
    console.log(`${vorname2} ${nachname2}`);
}

full_name("max", "muster");
oneline();



const mathe = function(nummer1, nummer2) {
    console.log(nummer1 + nummer2);
    console.log(nummer1 - nummer2);
};

let n1 = 5;
let n2 = 7;
let n3 = 1234;

mathe(n1, n2);
mathe(n3, n2);


function oneline() {
    console.log("---------------------------------------------");
}


function mathe(x, y) {
    console.log(x * y);
    console.log(x / y);
    console.log(x + y);
    console.log(x -y);
}

let z1 = 44;
let z2 = 12;
let z3 = 124;
let z4 = 66;
let z5 = 22;

mathe(z1 ,z2);
mathe(z3, z4);
mathe(z2, z5);
oneline()
*/


const rechnen = function(a,b) {
    return a * b;
};
let zahl1 = 55;
let zahl2 = 22;
let result = rechnen(zahl1,zahl2);
console.log(result);
let result2 = rechnen(result,result);
console.log(result2);
console.log(result2 + 2);


