// class volume

class Esferav{
    constructor(raioesfera, volumeesfera){
        this.raioesfera = raioesfera
        this.volumeesfera = volumeesfera

        this.volumeesfera = (4/3) * (3.14) * (raioesfera * raioesfera * raioesfera)
    }

calcularvolumeEsfera(){
    respostaesfera = "O volume da sua esfera é de: "+ this.volumeesfera.toFixed(2) +"cm³."

console.log(respostaesfera)
}
}