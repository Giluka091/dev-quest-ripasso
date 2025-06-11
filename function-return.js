function calcolaTempoViaggio(distanzaKm, velocitàKmH) {
    return distanzaKm/velocitàKmH
}
let tempo = calcolaTempoViaggio(5000000, 150)
console.log(`Il tempo necessario sarà ${tempo} ore!`)