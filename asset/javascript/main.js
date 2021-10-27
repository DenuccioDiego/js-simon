

let numeroRandom = []
let numeriUtente = []
let clock ;
let seconds = -1
let selezioneTimer = document.getElementById("timer")

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
          selezioneTimer.innerHTML = seconds
     }

     else if(seconds==30){
          selezioneTimer.innerHTML = "Ora tocca a te"
          seconds++
     }

     else{
          clearInterval(clock)
     
          chiediUtenteNumero()

          let intersection = numeroRandom.filter(x => numeriUtente.includes(x));
          console.log(intersection)

          selezioneTimer.innerHTML = `Numero di valori indovinati ${intersection.length}<br>I numeri indovinati:`

          intersection.forEach(x => {
               selezioneTimer.insertAdjacentHTML("beforeend", `<div>${x}</div> `)
          });
    
     } 

},1000)















