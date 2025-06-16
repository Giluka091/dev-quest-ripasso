let registroEroi = [
  { nome: "Arthas", classe: "guerriero", livello: 5, inVita: false },
  { nome: "Jaina", classe: "mago", livello: 9, inVita: true },
  { nome: "Valeera", classe: "ladro", livello: 12, inVita: true },
  { nome: "Kael", classe: "mago", livello: 1, inVita: false }
]
function promuoviEroe (nome){
for (let i=0; i<registroEroi.length; i++){
    let eroe=registroEroi[i]
       let messaggio = ''
        if (eroe.nome===nome){
            eroe.livello++
            messaggio = `Il livello di ${eroe.nome} è aumentato di 1, il suo nuovo livello è ${eroe.livello}!`
            if (!eroe.inVita){
                eroe.inVita = true
                messaggio += ` E' stato anche rianimato!`
            }
            return messaggio
        }
    }
        return 'Eroe non trovato.'
    
}
      

console.log(promuoviEroe("Arthas"))