const studenti = [
    { ime: "Bojan", prosek: 7.5, grad: "Skopje" }, //[0] => {}
    { ime: "Pero", prosek: 8.3, grad: "Bitola" },
    { ime: "Janko", prosek: 6.9, grad: "Bitola" },
    { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
    { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
    { ime: "Vancho", prosek: 10, grad: "Tetovo" },
    { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
    { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
    { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
    { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
]; 



//5. Вкупен просек на студенти чиешто име завршува на буквата а, и на сите останати

const a=studenti.filter(filt=>filt.ime.endsWith("a"))
console.log(a)
let sum=0;
let prosek1=0;
const proseka=a.forEach(el=>{
      sum+=el.prosek;
})
prosek1=sum/a.length;
console.log(prosek1)


const ostanati=studenti.filter(filt=>!filt.ime.endsWith("a"))
console.log(ostanati)

let sum1=0;
let prosek2=0;
const prosek=ostanati.forEach(el=>{
      sum1+=el.prosek;
})
prosek2=sum1/ostanati.length;
console.log(prosek2)