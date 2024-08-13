function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes(2)
msg.innerHTML = `<h1>Agora são ${hora} horas e ${minutos} minutos.</h1>`
if (hora >= 0 && hora < 12) {
    msg.innerHTML += '<h2>Bom dia!</h2>'
    img.src = 'manha.jpg'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora < 18) {
    msg.innerHTML += '<h2>Boa tarde!</h2>'
    img.src = 'tarde.jpg'
    document.body.style.background = '#b9846f'
} else if (hora >= 18 && hora < 23) {
    msg.innerHTML += '<h2>Boa noite!</h2>'
    img.src = 'noite.jpg'
    body.style.background = '#515154'
}}
