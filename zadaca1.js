const studenti = [
    { ime: "Bojan", prosek: 7.5, grad: "Skopje" }, //[0] => {}
    { ime: "Pero", prosek: 8.3, grad: "Bitola" },
    { ime: "Janko", prosek: 6.9, grad: "Bitola" },
    { ime: "NAta", prosek: 9.2, grad: "Skopje" },
    { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
    { ime: "Vancho", prosek: 10, grad: "Tetovo" },
    { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
    { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
    { ime: "Nata", prosek: 8.1, grad: "Skopje" },
    { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
]; 

//1. Сите студенти од Скопје чие име завршува на буквата а и имаат просек над 7, подредени по име (растечки)

const filtrirani=studenti.filter(filt=>filt.grad === "Skopje" && filt.ime.endsWith("a") && filt.prosek>7)

const poime=filtrirani.sort((a,b)=>a.ime.localeCompare(b.ime))

console.log(poime)


