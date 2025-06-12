// Creazione dell'oggetto
let anelloDelPotere = {
    nome : 'Anello dell\'ombra',
    potenza : 30,
    corrotto : true,
    indossato : false
}
// Creazione della funzione
function usaAnello(){
    // Qui creo la variabile che verrà salvata nel return
    let potere = ''
    // Modifichiamo il valore della proprietà "indossato" relativa all'oggetto creato in precedenza
    anelloDelPotere.indossato = true
    // Si stabiliscono le condizioni
    if (anelloDelPotere.corrotto){
        potere = `L\'anello ti consuma... Potenza negativa: ${anelloDelPotere.potenza/2}`
    }
    else {
        potere = `Il potere scorre in te. Potenza aumentata: ${anelloDelPotere.potenza*3}`
    }
    // Si crea il return che restituità il contenuto della variabile "potere"
    return potere
}
// Creazione variabile fuori dalla funzione, richiamandola grazie al return
let risposta = usaAnello()
// Stampa risposta (GAME SET AND MATCH!)
console.log(risposta)


