let zaino = [
    { nome : 'pozione blu', quantità : 2, effetto : 'cura', rara : false},
    { nome : 'pozione gialla', quantità : 1, effetto : 'mana', rara : false},
    { nome : 'pozione rossa', quantità : 1, effetto : 'veleno', rara : true},
    { nome : 'pozione rosa', quantità : 2, effetto : 'cura', rara : true}
]
function beviPozione(nomePozione){
    for ( let i = 0; i < zaino.length; i++){
        let pozione = zaino[i]
            let risultato = ''
            if (pozione.nome === nomePozione){
                if (pozione.quantità === 0){
                    return `La pozione è finita.`
                }
                if (pozione.effetto === 'veleno'){
                    risultato = `Era avvelenata`
                }
                if (pozione.rara){
                    risultato += ` Hai usato una pozione rara!`
                }
                pozione.quantità--
                return `Hai usato la ${pozione.nome}, ${risultato}, te ne rimangono ${pozione.quantità}`

        }
    }
return `Pozione non trovata`
}
    console.log(beviPozione('pozione rossa'))
