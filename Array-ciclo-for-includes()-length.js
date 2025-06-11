// Esercizio - Array, ciclo for, includes(), length
// Scopo: controllare gli oggetti nello zaino ed eseguire azioni basate sul contenuto
let zaino = ['spada','scudo','chiave del regno','torcia','amuleto']
// Ciclo per elencare tutti gli oggetti nello zaino
for (let i=0; i<zaino.length; i++)
    console.log(`Oggetto #${i+1}: ${zaino[i]}`)
// Controlla se la 'chiave del regno' è presente
if (zaino.includes('chiave del regno')){
    console.log(`La chiave del regno è con te. L'ingresso è aperto!`)
}
// Mostra quanti oggetti ci sono nello zaino
console.log(`Lo zaino contiene ${zaino.length} oggetti`)
