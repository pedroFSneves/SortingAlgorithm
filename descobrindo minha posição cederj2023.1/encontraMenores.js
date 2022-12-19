function encontraMenores(pivo, array){
    let menores = 0;

    for(let atual = 0; atual < array.length; atual++) {
        let produtoAtual = array[atual];

        if(produtoAtual.notaFinal < pivo.notaFinal){
            menores++;
        }
    }
trocaLugar(array, array.indexOf(pivo), menores);
return array;
}

function trocaLugar(lista, de, para){
    const elem1 = lista[de];
    const elem2 = lista[para];

    lista[para] = elem1;
    lista[de] = elem2;
}

function divideNoArray(array) {
    let pivo = array[Math.floor(array.length/2)];
    encontraMenores(pivo, array);
    let valoresMenores = 0;

    for(let analisando = 0; analisando < array.length; analisando++){
        let atual = array[analisando];

        if(atual.nota1 < pivo.notaFinal && atual !== pivo){ //(&& !==)atual diferente de pivo
            trocaLugar(array, analisando, valoresMenores);
            valoresMenores++
        }

    }
return array;
}

module.exports = trocaLugar;