let viandante = {
    energia : 80,
    oro : 50,
    pozioni : 2
}
function riposaEVendi(){
    viandante.energia += 20
    viandante.oro += 10
    viandante.pozioni++
    return `Il viandate ora ha ${viandante.energia} energia, ${viandante.oro} oro e ${viandante.pozioni} pozioni.`
}
console.log(riposaEVendi())


