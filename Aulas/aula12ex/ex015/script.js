function confirmar(){
    var idade = document.getElementById('idade')
    var fano = document.getElementById('dtNasc')
    var data = new Date()
    var ano = data.getFullYear()

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verefique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade < 3){
                //bebê
                img.setAttribute('src', 'imagens/homembebe.jpg')
            } else if(idade < 15){
                //criança
                img.setAttribute('src', 'imagens/homemcrianca.jpg')
            } else if(idade < 26) {
                //jovem
                img.setAttribute('src', 'imagens/homemjovem.jpg')
            }else if(idade < 40) {
                //adulto
                img.setAttribute('src', 'imagens/homemadulto.jpg')
            }else if(idade < 60){
                //meia idade
                img.setAttribute('src', 'imagens/homemeiaidade.jpg')
            }else{
                //idoso
                img.setAttribute('src' , 'imagens/homemidoso.jpg')
            }

        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade < 3){
                //bebê
                img.setAttribute('src', 'imagens/mulherbebe.jpg')
            } else if(idade < 15){
                //criança
                img.setAttribute('src', 'imagens/mulhercrianca.jpg')
            } else if(idade < 26) {
                //jovem
                img.setAttribute('src', 'imagens/mulherjovem.jpg')
            }else if(idade < 40) {
                //adulto
                img.setAttribute('src', 'imagens/mulheradulta.jpg')
            }else if(idade < 60){
                //meia idade
                img.setAttribute('src', 'imagens/mulhermeiaidade.jpg')
            }else{
                //idoso
                img.setAttribute('src' , 'imagens/mulheridosa.jpg')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
        res.appendChild(img)
    }

}