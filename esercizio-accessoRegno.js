// Esercizio: Funzione con parametri, condizioni if/else e gestione dell'accesso al Regno

// Qui si crea la funzione e gli si assegnano i parametri con cui lavorare
function accessoAlRegno (nome,monete) {                   
// Qui la prima condizione, ricordati che se non metti l'apice js legge una variabile non assegnata    
    if (nome === 'Giluka') {              
        console.log(`Hai accesso totale`)                  
    }
    else if (nome === 'Walter') {
        console.log(`Entra pure fratello del sovrano`)
    } 
// Qui le casistiche nel caso i primi due if non siano veri    
    else {
        if (monete >= 50){
            console.log(`Se paghi una tassa sei il benvenuto`)
        }
        else {
            console.log(`Vattene, accesso al regno negato`)
        }
}}
// Qui si richiama la funzione facendola lavorare, e gli si definiscono i parametri
accessoAlRegno ('Ugo',55)
