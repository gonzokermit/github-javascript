"use strict";

let einnahmen = 0;
let ausgaben = 0;
let bilanz = 0;

let titel;
let typ;
let betrag;
let datum;

const eintrag_erfassen = function() {
    titel = prompt("Titel: ");
    typ = prompt("Typ / Einnahme oder Ausgabe: ");
    betrag = parseInt(prompt("Betrag: "));
    datum = prompt("Datum / JJJJ-MM-TT: ");
};

const eintrag_ausgeben = function(titel,typ,betrag,datum) {
    console.log(`Titel: ${titel}`);
    console.log(`Typ: ${typ}`);
    console.log(`Betrag : ${betrag} ct`);
    console.log(`Datum: ${datum}`);
};

const eintrag_mit_gesamtbilanz_verrechnen = function(typ,betrag) {
    if (typ === "Einnahme") {
        einnahmen = einnahmen + betrag;
        bilanz = bilanz + betrag;
    } else if (typ === "Ausgabe") {
        ausgaben = ausgaben + betrag;
        bilanz = bilanz - betrag;
    } else {
        console.log(`Der Type ${typ} ist nicht bekannt!`);
    }
};

const gesamtbilanz_ausgeben = function(einnahmen,ausgeben,bilanz) {
    console.log(`Einnahmen: ${einnahmen} ct`);
    console.log(`Ausgaben: ${ausgaben} ct`);
    console.log(`Bilanz ${bilanz} ct`);
    console.log(`Bilanz ist positiv ${bilanz >= 0}`);
};

const eintrag_hinzufuegen = function() {
    eintrag_erfassen();
    eintrag_ausgeben(titel,typ,betrag,datum);
    eintrag_mit_gesamtbilanz_verrechnen(typ,betrag);
    gesamtbilanz_ausgeben(einnahmen,ausgaben,bilanz);
}

eintrag_hinzufuegen();
eintrag_hinzufuegen();
eintrag_hinzufuegen();



