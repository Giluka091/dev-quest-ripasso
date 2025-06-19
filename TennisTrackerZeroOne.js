let registroPartite = []
function aggiungiMatch(avversario, setArray, ufficiale) {
  let setVinti = 0
  let setPersi = 0
  for (let set of setArray) {
    if (set.gameVinti < 0 || set.gamePersi < 0) return "Errore"
    if (set.gameVinti > set.gamePersi) setVinti++
    else if (set.gamePersi > set.gameVinti) setPersi++
  }
  let tipoMatch = ufficiale ? 'Ufficiale' : 'Amichevole'

  let partita = {
    avversario,
    set: setArray,
    ufficiale
  }
  registroPartite.push(partita)
  return `Hai giocato contro ${avversario}: ${setVinti} set a ${setPersi} (${tipoMatch})`
}
console.log(aggiungiMatch('Marco', [
  { gameVinti: 6, gamePersi: 4 },
  { gameVinti: 3, gamePersi: 6 },
  { gameVinti: 6, gamePersi: 2 }
], true))

let avversario = prompt(`Come si chiamava il tuo avversario?`)
let setArray = []
let setGame = Number(prompt(`Quanti set hai giocato?`))
let ufficiale = prompt(`Era un match ufficiale? (Si/No)`)
let ufficaleSiNo = ufficiale.toLocaleLowerCase()
if (ufficaleSiNo === `si`){
  ufficaleSiNo = true
}
if (ufficaleSiNo === `no`){
  ufficaleSiNo = false
}
for (let i = 0; i < setGame; i++){
  let game = {
    gameVinti : Number(prompt(`Quanti game vinti set ${i + 1}?`)),
    gamePersi : Number(prompt(`Quanti game persi ${i + 1}?`))
  }
  setArray.push(game)
}
aggiungiMatch(avversario, setArray, ufficaleSiNo)
console.log("Registro partite attuale:", registroPartite)


