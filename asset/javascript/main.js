

let numeroRandom = []
let numeriUtente = []

do{
     let numero = 0
     numero = Math.floor(Math.random()*100)
     alert(numero)
     numeroRandom.push(numero)

}while(numeroRandom.length<5)
     


console.log(numeroRandom)

let clock ;

clock = setInterval(function(){



},3000)



do{
     let x = 0
     x = prompt("inserisci numero")
     numeriUtente.push(x)

}while(numeriUtente.length<5)


console.log(numeriUtente)