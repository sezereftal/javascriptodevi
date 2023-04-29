let kisi = document.getElementById("kisi")

var hosgeldin = prompt(`hoşgeldin kardeş. adini yazabilir misin? `)
kisi.innerHTML = hosgeldin

var clock=document.getElementById("clock");
var gunler=["","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]

   
function tarihfonk(){
    var gun = new Date();
    clock.innerText=gunler[gun.getDay()];
    var tarih=new Date().toLocaleString('tr-TR');
    clock.innerText+=" "+tarih;

}

setInterval(tarihfonk,1000)