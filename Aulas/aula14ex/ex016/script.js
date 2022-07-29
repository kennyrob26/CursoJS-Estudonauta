function contar(){
    var ini = Number((window.document.getElementById('ini')).value)
    var fim = Number((window.document.getElementById('fim')).value)
    var pas = Number((window.document.getElementById('pas')).value)

    var contagem = window.document.getElementById('cont')
    //Verficações de entrada
    if(ini == 0){
        //verifica se o inicio é diferente de 0
        window.alert('O ínicio deve ser maior que 0')
    }else if(fim == 0){
        //verifica se o fim é diferente de 0
        window.alert('O fim deve ser maior que 0')
    }else{
        if(pas == 0){
            //verifica se o passo é diferente de 0
            window.alert('O passo não pode ser 0, vamos considerar o passo como 1')
            pas = 1
        }
        //Contagem inserida pelo usuário:
        contagem.innerHTML = 'Contando: </br>'

        //contagem crescente
        if(ini < fim){
            while(ini <= fim){
                contagem.innerHTML += `${ini}👉 `
                ini += pas
        }
        //contagem regressiva
        }else{
            while(ini >= fim){
                contagem.innerHTML += `${ini}👉 `
                ini -= pas
            }
        }
        contagem.innerHTML += `🏁`

    }

}
