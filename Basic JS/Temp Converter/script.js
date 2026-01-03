const C = document.getElementById("temp-c");
const F = document.getElementById("temp-f");
const K = document.getElementById("temp-k");

let cel;
let kel;
let far;

submitButton = document.getElementById("btn-submit");

submitButton.onclick = function (){
cel = Number(C.value);
kel = cel + 273;
far = (cel * (9/5))+32;
F.innerHTML = `The temp in Far is ${far}`;
K.innerHTML = `The temp in Kel is ${kel}`;
}