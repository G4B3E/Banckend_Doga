"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statue_1 = require("./Statue");
let artwork = [];
let nev = document.getElementById('nev');
let ar = document.getElementById('ar');
let keszites_eve = document.getElementById('keszites_eve');
let magassag = document.getElementById('magassag');
let hibamezo = document.getElementById('Hiba');
function nevCheck(nev) {
    let sampleRegEx = new RegExp('ABC', ',- ');
    if (sampleRegEx.test(nev) && nev.length >= 1 && nev != "") {
        return true;
    }
    return false;
}
function arCheck(ar) {
    if (ar >= 1) {
        return true;
    }
    return false;
}
function magassagCheck(magassag) {
    if (magassag >= 20) {
        return true;
    }
    return false;
}
function keszites_eveCheck(keszites_eve) {
    if (keszites_eve <= 2022 && keszites_eve >= 0) {
        return true;
    }
    return false;
}
function checkAll() {
    if (nevCheck(nev.value) && arCheck(parseInt(ar.value)) && magassagCheck(parseInt(magassag.value)) && keszites_eveCheck(parseInt(keszites_eve.value))) {
        artwork.push(new Statue_1.Statue(nev.value, parseInt(ar.value), parseInt(magassag.value), parseInt(keszites_eve.value)));
        console.log(artwork);
    }
    else {
        hibamezo.textContent = "";
        console.log("valami nem jó");
        if (!nevCheck(nev.value)) {
            hibamezo.textContent = "Hibás a cim";
        }
        else if (!arCheck(parseInt(ar.value))) {
            hibamezo.textContent = "Az ár nem lehet negatív";
        }
        else if (!magassagCheck(parseInt(magassag.value))) {
            hibamezo.textContent = "A magasság nem lehet negatív";
        }
        else if (!keszites_eveCheck(parseInt(keszites_eve.value))) {
            hibamezo.textContent = "Az év nem lehet negatív vagy nem lehet nagyobb mint a mostani év";
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.getElementById('felvesz')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', checkAll);
});
