window.onload=function(){

    alert("¡Bienvenido a la seccion de Motores Garcia!");

}

function Facebook(){
    alert("Proximamente estaremos en Facebook.");

}

function whatsApp(){
    alert ("whatsApp: 5512345678");
}

const tarjetas=document.querySelectorAll(".tarjeta");
tarjetas.forEach (function(tarjeta){
    tarjeta.addEventListener("mouseover",function(){
      tarjeta.style.transform="scale(1.05)";  
    });

     tarjeta.addEventListener("mouseover",function(){
        tarjeta.style.transform="scale(1)";
     });
});

