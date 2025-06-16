let concilioMaghi = [
  { nome: "Merlino", elemento: "fuoco", anzianità: 120, inAttività: true },
  { nome: "Morgana", elemento: "acqua", anzianità: 95, inAttività: true },
  { nome: "Radagast", elemento: "terra", anzianità: 80, inAttività: true },
  { nome: "Zephyrus", elemento: "aria", anzianità: 60, inAttività: false }
]
function maghiAttivi(){
    let maghi = concilioMaghi.filter(m => m.inAttività === true)
    if (maghi.length > 0){
        let nomi = maghi.map(m => m.nome).join(', ')
        console.log(`Hai ${maghi.length} maghi attivi: ${nomi}`)
    }
    else {
        console.log(`Nessun mago attivo`)
    }
}
maghiAttivi()