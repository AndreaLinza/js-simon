// Traccia
// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
// Consigli
// Questo esercizio richiede un po’ di ricerca ma anche un po’ di domande che accompagnano l’uomo da tempo immemore:
// Da quante ore è composto un giorno?
// Da quanti minuti è composta un’ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano da domani alle 9:30?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?



const time = new Date()
const containerFlorian = document.querySelector(".row") 

console.log(new Date())


//document.getElementById("time").innerHTML = time
document.getElementById("g").innerHTML = time.getDate()
document.getElementById("m").innerHTML = time.getMonth()+1 
document.getElementById("y").innerHTML = time.getFullYear()
// document.getElementById("h").innerHTML = time.getHours()
// document.getElementById("min").innerHTML = time.getMinutes()
// document.getElementById("sec").innerHTML = time.getSeconds()
// document.getElementById("millsec").innerHTML = time.getMilliseconds()


// Setto la variabile per la fine del timer
let countDownDate = new Date("Jul 14, 2023 09:30:00").getTime();

console.log(countDownDate)

// Si crea funzione per settare l'intervallo di tempo che sarà di un secondo
let timerLesson = setInterval(function () {
    
    // recupero la data odierna in millisecondi
    let now = new Date().getTime();
    
    //console.log(now)
    
    // Mi vado a calcolare la differenza fra il countdown e i millesecondi della variabile
    let difference = countDownDate - now;
    
    // Il tempo calcolato per giorni, ore, minuti e secondi basandoci sulla differenza
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Output del risultato
    document.getElementById("count-down").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    
    // se il countdown è terminato fermo la funzione intervallo e stampo nel html qualcosa
    if (difference < 0) {
        clearInterval(timerLesson);
        document.querySelector(".lesson").innerHTML = `<h1 class="text-uppercase">La lezione è iniziata</h1>`
        document.getElementById("count-down").innerHTML = `<h1 class="text-danger text-decoration-underline">A Lezione Maledetti</h1>`;
        const florian = document.createElement("div")
        florian.classList.add("florian-lesson")
        containerFlorian.append(florian)
        document.querySelector(".florian-lesson").innerHTML = `<h1 class="text-center fw-bold">Ribuongiorno Ragazzi</h1><p class="display-1 text-danger text-center">🤯</p>`;

        console.log(florian)
    }
});