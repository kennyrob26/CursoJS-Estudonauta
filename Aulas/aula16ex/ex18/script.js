var add = []
add.sort
res = window.document.getElementById('res') 

function adicionar(){

    var n1 = Number((window.document.getElementById('txtn')).value)
    res.innerHTML = `` //Limpa os resultados quando adicionar um novo número

    //Verfica se o valor se encontra entre 1 e 100
    if (n1 < 1 || n1 > 100){
        alert('Por favor digite um número válido!')
    }else{
        let select = window.document.getElementById('val') 

        //Verifica se o número já se encontra na lista
        if(add.indexOf(n1) != -1){
            alert('Número já adicionado, por favor digite outro número')
        }else{
            add.push(n1)
            var op = document.createElement('option')
            op.text = `Valor ${n1} adicionado.`
            select.appendChild(op)
        }
        

    }

}

function finalizar(){
    t = add.length  //tamanho
    add.sort((a, b) => a - b) // ordem crescente

    //Verfica se o Select tem valores
    if(add.length == 0){
        alert('Por favor, digite algum valor')
    } else {

        res.innerHTML = `
            <p>
                Ao todo, temos ${add.length} números cadastrados 
            </p>
            <p>
                O maior valor informado foi ${add[t-1]}.
            </p>
            <p>
                O menor valor informado foi ${add[0]}.
            </p>
            <p>
                Somando todos os valores, temos ${soma()}.
            </p>
            <p>
                A média dos valores digitados é ${media()}.
            </p>`


    }
}

function soma(){
    var soma = 0
    for(var i in add){
        soma = soma + Number(add[i])   
    }
    return soma
}

function media(){
    var media = soma() / t
    return media
}

/*function maior(){

    var t = add.length
    return add[t-1]

}

function menor(){
    add.sort((a, b) => a - b)
    return add[0]
}
*/