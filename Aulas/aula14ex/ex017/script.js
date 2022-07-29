function gerar(){
    var numV = (window.document.getElementById('num').value)
    let tab = document.getElementById('seltab')




    if(numV.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        var num = Number(numV)
        var cont = 1
        tab.innerHTML =''
        while(cont <= 10){
            var item = document.createElement('option')
            item.text = `${num} X ${cont} = ${cont * num}`
            tab.appendChild(item)
            cont++

    }
    }


    
}

