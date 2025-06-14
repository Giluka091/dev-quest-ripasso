zaino = []
function aggiungiOggetto(nome, colore, quantità, uso,){
let gemma = {
    nome: nome,
    colore: colore,
    quantità: quantità,
    uso: uso
}
zaino.push(gemma)
return `Hai aggiunto ${gemma.nome} al tuo inventario!`
}
console.log(aggiungiOggetto('gemma', 'rosso', 2, 'magico'))
console.log(zaino)