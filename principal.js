// variáveis e addeventlistener

let respostaesfera = document.getElementById("respostaesfera")
let calcularesfera = document.getElementById("calcularesfera")

calcularesfera.addEventListener("click", ()=>{

let raioesfera = Number(document.getElementById("raioesfera").value)    
let volumeesfera = 0

const esferaa = new Esferav(raioesfera, volumeesfera)

let resultadoEsfera = esferaa.calcularvolumeEsfera()
respostaesfera.innerHTML += (resultadoEsfera)
})