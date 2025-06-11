function accessoTempio(nome, onore, energia){
    if (nome ==='Giluka' || nome === 'Walter'){
        console.log(`Benvenuto ${nome}, accesso totale.`)
    }
        else if (onore >= 70 && energia >= 50){
            console.log(`Valore onorevole, puoi accedere al tempio`)
        }
        else {
            console.log(`Mi spiace, non hai i requisiti per entrare`)
        }
    }
