function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`

    if(hora >= 0 && hora < 12){
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#faa32f'
    }else if(hora < 18){
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#61779c'
    }else{
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#15282c'
    }
}
