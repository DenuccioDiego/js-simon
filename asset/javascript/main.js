

let numeroRandom = []
let numeriUtente = []
let clock ;
let seconds = -1

do{
     let numero = 0
     numero = Math.floor(Math.random()*100)
     alert(numero)
     numeroRandom.push(numero)

}while(numeroRandom.length<5)
     


console.log(numeroRandom)


clock = setInterval(function(){
     
     if(seconds<30){
          seconds++ 
          console.log(seconds)

     }
     else{
          clearInterval(clock)
     } 

},1000)


do{
     let x = 0
     x = prompt("inserisci numero")
     numeriUtente.push(x)

}while(numeriUtente.length<5)


console.log(numeriUtente)









