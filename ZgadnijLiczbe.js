const prompt = require('prompt-sync')(); 


let value;
let liczbaLosowa;
let liczbaProb = 0;
function PodajLiczbe(){
    value = parseInt(prompt("podaj liczbe od 1-100: "))
    liczbaLosowa = Math.floor(Math.random() * 100) + 1;


}

function Sprawdzanie(){
    
while(value < 1 || value > 100){
    console.log("Podaj poprawną liczbę z zakresu od 1-100");
    PodajLiczbe();  
}
    Gra()
}

function Gra(){
   while(true){
    liczbaProb++
       if(value < liczbaLosowa){
           console.log("Liczba jest za mała")
       }else if(value > liczbaLosowa){
           console.log("Liczba jest za duża")
       }else{
           console.log("Wygrałeś")
           console.log("Twoja Liczba prob to: "+ liczbaProb)
           break;
       }
       value = parseInt(prompt("podaj liczbe od 1-100: "))
   }
}


PodajLiczbe()
Sprawdzanie()