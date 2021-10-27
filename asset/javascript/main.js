

let numeroRandom = []
let numeriUtente = []
let clock ;
let seconds = -1

function chiediUtenteNumero(){

     do{
          let numero = 0
          numero = Number(prompt("inserisci numero"))
          numeriUtente.push(numero)
     
     }while(numeriUtente.length<5)
     
     
     console.log(numeriUtente)

}

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
          document.getElementById("timer").innerHTML = seconds
          //console.log(document.getElementById("timer").innerHTML = seconds)

          
          

     }

     else if(seconds==30){
          document.getElementById("timer").innerHTML = "Ora tocca a te"
          seconds++
     }

     else{
          clearInterval(clock)
          
          chiediUtenteNumero()
          let intersection = numeroRandom.filter(x => numeriUtente.includes(x));
          console.log(intersection)
          
     } 

},1000)















