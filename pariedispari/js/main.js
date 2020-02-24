var scelta= prompt('scegli pari o dispari')

if (scelta == 'pari') {
    console.log('hai scelto pari');
    var numero= parseInt(prompt('scegli un numero'))
    console.log('hai scelto '+ numero);
    var pcnumber= Math.floor(Math.random()*100)
    console.log('il pc ha scelto '+ pcnumber);
        console.log('la somma fa '+ (numero + pcnumber));
    var somma = isPari(numero + pcnumber)

    if (somma) {
        console.log('hai vinto e pari ');
    } else  {
        console.log('hai perso e dispari');
    }
} else if (scelta == 'dispari') {
    console.log('hai scelto dispari');
    var numero= parseInt(prompt('scegli un numero'))
    console.log('hai scelto '+ numero);
    var pcnumber= Math.floor(Math.random()*100)
    console.log('il pc ha scelto '+ pcnumber);
    console.log('la somma fa ' + (numero + pcnumber));
    var somma = isPari(numero + pcnumber)

    if (somma) {
        console.log('hai perso e pari');
    } else  {
        console.log('hai vinto e dispari');
    }
}else {
    console.log('non hai scelto giusto');
}









var pariODispari = isPari(numeroUtente);
console.log(pariODispari);



if (pariODispari) {
    console.log('Numero Pari');
} else {
    console.log('Numero Dispari');
}

function isPari(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
