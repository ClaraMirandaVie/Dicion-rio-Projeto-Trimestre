let palavraUm = document.getElementById("palavra-um")
let palavraDois = document.getElementById("palavra-dois")
let palavraTres = document.getElementById("palavra-tres")
let palavraQuatro = document.getElementById("palavra-quatro")
let palavraCinco = document.getElementById("palavra-cinco")

let palavraSeis = document.getElementById("palavra-seis")
let palavraSete = document.getElementById("palavra-sete")
let palavraOito = document.getElementById("palavra-oito")
let palavraNove = document.getElementById("palavra-nove")
let palavraDez = document.getElementById("palavra-dez")


let abrir = document.getElementById("caixa-um")
let abrirDois = document.getElementById("caixa-dois")
let abrirTres = document.getElementById("caixa-tres")
let abrirQuatro = document.getElementById("caixa-quatro")
let abrirCinco = document.getElementById("caixa-cinco")

let abrirSeis = document.getElementById("caixa-seis")
let abrirSete = document.getElementById("caixa-sete")
let abrirOito = document.getElementById("caixa-oito")
let abrirNove = document.getElementById("caixa-nove")
let abrirDez = document.getElementById("caixa-dez")


let fechar = document.getElementById("fecharteste")
let fecharDois = document.getElementById("fechartestedois")
let fecharTres = document.getElementById("fechartestetres")
let fecharQuatro = document.getElementById("fechartestequatro")
let fecharCinco = document.getElementById("fechartestecinco")

let fecharSeis = document.getElementById("fechartesteseis")
let fecharSete = document.getElementById("fechartestesete")
let fecharOito = document.getElementById("fechartesteoito")
let fecharNove = document.getElementById("fechartestenove")
let fecharDez = document.getElementById("fechartestedez")


palavraUm.addEventListener('click', (e)=>{
    abrir.style.visibility = "visible"
})
palavraDois.addEventListener('click', (e)=>{
    abrirDois.style.visibility = "visible"
})
palavraTres.addEventListener('click', (e)=>{
    abrirTres.style.visibility = "visible"
})
palavraQuatro.addEventListener('click', (e)=>{
    abrirQuatro.style.visibility = "visible"
})
palavraCinco.addEventListener('click', (e)=>{
    abrirCinco.style.visibility = "visible"
})



palavraSeis.addEventListener('click', (e)=>{
    abrirSeis.style.visibility = "visible"
})
palavraSete.addEventListener('click', (e)=>{
    abrirSete.style.visibility = "visible"
})
palavraOito.addEventListener('click', (e)=>{
    abrirOito.style.visibility = "visible"
})
palavraNove.addEventListener('click', (e)=>{
    abrirNove.style.visibility = "visible"
})
palavraDez.addEventListener('click', (e)=>{
    abrirDez.style.visibility = "visible"
})





fechar.addEventListener('click', (e)=>{
    abrir.style.visibility = "hidden"
})
fecharDois.addEventListener('click', (e)=>{
    abrirDois.style.visibility = "hidden"
})
fecharTres.addEventListener('click', (e)=>{
    abrirTres.style.visibility = "hidden"
})
fecharQuatro.addEventListener('click', (e)=>{
    abrirQuatro.style.visibility = "hidden"
})
fecharCinco.addEventListener('click', (e)=>{
    abrirCinco.style.visibility = "hidden"
})

fecharSeis.addEventListener('click', (e)=>{
    abrirSeis.style.visibility = "hidden"
})
fecharSete.addEventListener('click', (e)=>{
    abrirSete.style.visibility = "hidden"
})
fecharOito.addEventListener('click', (e)=>{
    abrirOito.style.visibility = "hidden"
})
fecharNove.addEventListener('click', (e)=>{
    abrirNove.style.visibility = "hidden"
})
fecharDez.addEventListener('click', (e)=>{
    abrirDez.style.visibility = "hidden"
})


let conto = document.getElementById("Conto-portu")
let abrirConto = document.getElementById("Conto")
let fecharConto = document.getElementById("fechar-conto")

conto.addEventListener('click', (e)=>{
    abrirConto.style.visibility = "visible"
})
fecharConto.addEventListener('click', (e)=>{
    abrirConto.style.visibility = "hidden"
})


let audioUm = document.getElementById("audio-um")
let audioDois = document.getElementById("audio-dois")
let audioTres = document.getElementById("audio-tres")
let audioQuatro = document.getElementById("audio-quatro")
let audioCinco = document.getElementById("audio-cinco")

let audioSeis = document.getElementById("audio-seis")
let audioSete = document.getElementById("audio-sete")
let audioOito = document.getElementById("audio-oito")
let audioNove = document.getElementById("audio-nove")
let audioDez = document.getElementById("audio-dez")


let botaoAudioUm = document.getElementById("botao-audio-um")
let botaoAudioDois = document.getElementById("botao-audio-dois")
let botaoAudioTres = document.getElementById("botao-audio-tres")
let botaoAudioQuatro = document.getElementById("botao-audio-quatro")
let botaoAudioCinco = document.getElementById("botao-audio-cinco")

let botaoAudioSeis = document.getElementById("botao-audio-seis")
let botaoAudioSete = document.getElementById("botao-audio-sete")
let botaoAudioOito = document.getElementById("botao-audio-oito")
let botaoAudioNove = document.getElementById("botao-audio-nove")
let botaoAudioDez = document.getElementById("botao-audio-dez")






botaoAudioUm.addEventListener('mouseover', (e)=>{
    audioUm.play();
})
botaoAudioDois.addEventListener('mouseover', (e)=>{
    audioDois.play();
})
botaoAudioTres.addEventListener('mouseover', (e)=>{
    audioTres.play();
})
botaoAudioQuatro.addEventListener('mouseover', (e)=>{
    audioQuatro.play();
})
botaoAudioCinco.addEventListener('mouseover', (e)=>{
    audioCinco.play();
})

botaoAudioSeis.addEventListener('mouseover', (e)=>{
    audioSeis.play();
})
botaoAudioSete.addEventListener('mouseover', (e)=>{
    audioSete.play();
})
botaoAudioOito.addEventListener('mouseover', (e)=>{
    audioOito.play();
})
botaoAudioNove.addEventListener('mouseover', (e)=>{
    audioNove.play();
})
botaoAudioDez.addEventListener('mouseover', (e)=>{
    audioDez.play();
})



botaoAudioUm.addEventListener('mouseleave', (e)=>{
    audioUm.pause();
    audioUm.currentTime = 0;
})
botaoAudioDois.addEventListener('mouseleave', (e)=>{
    audioDois.pause();
    audioDois.currentTime = 0;
})
botaoAudioTres.addEventListener('mouseleave', (e)=>{
    audioTres.pause();
    audioTres.currentTime = 0;
})
botaoAudioQuatro.addEventListener('mouseleave', (e)=>{
    audioQuatro.pause();
    audioQuatro.currentTime = 0;
})
botaoAudioCinco.addEventListener('mouseleave', (e)=>{
    audioCinco.pause();
    audioCinco.currentTime = 0;
})

botaoAudioSeis.addEventListener('mouseleave', (e)=>{
    audioSeis.pause();
    audioSeis.currentTime = 0;
})
botaoAudioSete.addEventListener('mouseleave', (e)=>{
    audioSete.pause();
    audioSete.currentTime = 0;
})
botaoAudioOito.addEventListener('mouseleave', (e)=>{
    audioOito.pause();
    audioOito.currentTime = 0;
})
botaoAudioNove.addEventListener('mouseleave', (e)=>{
    audioNove.pause();
    audioNove.currentTime = 0;
})
botaoAudioDez.addEventListener('mouseleave', (e)=>{
    audioDez.pause();
    audioDez.currentTime = 0;
})





