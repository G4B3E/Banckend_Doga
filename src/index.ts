import {Artwork} from './Artwork_interface';
import { Statue } from './Statue';

let artwork : Artwork[] = [];
let nev  = (document.getElementById('nev') as HTMLInputElement)
let ar  = (document.getElementById('ar') as HTMLInputElement)
let keszites_eve  = (document.getElementById('keszites_eve') as HTMLInputElement)
let magassag  = (document.getElementById('magassag') as HTMLInputElement)
let hibamezo  = (document.getElementById('Hiba') as HTMLDivElement)

function nevCheck(nev : string) : boolean  {
    let sampleRegEx = new RegExp('ABC',',- ');
    if (sampleRegEx.test(nev) && nev.length >= 1 && nev != "") {
        return true;
    }
    return false;
}
function arCheck(ar : number) : boolean { 
    if (ar >= 1) {return true}
    return false;
}
function magassagCheck(magassag : number) : boolean { 
    if (magassag >= 20) {return true }
    return false;
}
function keszites_eveCheck(keszites_eve : number) : boolean { 
    if (keszites_eve <= 2022 && keszites_eve >= 0) {return true }
    return false;
}

function checkAll() {
        if(nevCheck(nev.value) && arCheck(parseInt(ar.value)) && magassagCheck(parseInt(magassag.value)) && keszites_eveCheck(parseInt(keszites_eve.value)) ) {
            artwork.push(new Statue(nev.value, parseInt(ar.value), parseInt(magassag.value), parseInt(keszites_eve.value)))
            console.log(artwork)
        }
        else {
            hibamezo.textContent = ""
            console.log("valami nem jó")
            if(!nevCheck(nev.value)) {
                hibamezo.textContent ="Hibás a cim"
            }
            else if(!arCheck(parseInt(ar.value))) {
                hibamezo.textContent ="Az ár nem lehet negatív"
            }
            else if(!magassagCheck(parseInt(magassag.value))) {
                hibamezo.textContent ="A magasság nem lehet negatív"
            } else if (!keszites_eveCheck(parseInt(keszites_eve.value))) {
                hibamezo.textContent ="Az év nem lehet negatív vagy nem lehet nagyobb mint a mostani év";
            }
        }

    }
        
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('felvesz')?.addEventListener('click', checkAll)

})
