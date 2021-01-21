"use strict";

let einnahmen = 0;
let ausgaben = 0;
let bilanz = 0;

let titel_1 = prompt("Titel");
let typ_1 = prompt("Einnahme oder Ausgabe");
let betrag_1 = parseInt(prompt("Betrag in ct"));
let datum_1 = prompt("Datum (DD-MM-YYYY)");

console.log(`Titel: ${titel_1}`);
console.log(`Typ: ${typ_1}`);
console.log(`Betrag: ${betrag_1}`);
console.log(`Datum: ${datum_1}`);

if (typ_1 === "Einnahme") {
    einnahmen = einnahmen + betrag_1;
    bilanz = bilanz + betrag_1;
} else if (typ_1 === "Ausgabe") {
    ausgaben = ausgaben + betrag_1;
    bilanz = bilanz - betrag_1;
} else {
    console.log(`Der Typ ${typ_1} ist nicht bekannt`);
}

let titel_2 = prompt("Titel");
let typ_2 = prompt("Einnahme oder Ausgabe");
let betrag_2 = parseInt(prompt("Betrag in ct"));
let datum_2 = prompt("Datum (DD-MM-YYYY)");

console.log(`Titel: ${titel_2}`);
console.log(`Typ: ${typ_2}`);
console.log(`Betrag: ${betrag_2}`);
console.log(`Datum: ${datum_2}`);

if (typ_2 === "Einnahme") {
    einnahmen = einnahmen + betrag_2;
    bilanz = bilanz + betrag_2;
} else if (typ_2 === "Ausgabe") {
    ausgaben = ausgaben + betrag_2;
    bilanz = bilanz - betrag_2
} else {
    console.log(`Der Typ ${typ_2} ist nicht bekannt`);
}

let positiv = bilanz >= 0;
console.log(`Einnahmen: ${einnahmen}`);
console.log(`Ausgaben: ${ausgaben}`);
console.log(`Bilanz: ${bilanz}`);
console.log(`Die Bilanz ist ${positiv}`);
