function misuraLiquido (mlLiquido,mlCapacità){
    let risultato = '';
    if (mlLiquido>mlCapacità){
        risultato='Mi spiace, non ci sta!'
    }
    else {
         risultato='Ottimo, il liquido può essere contenuto!'
    }
return risultato
}
let capacità = misuraLiquido(100,120)
console.log(capacità)
 