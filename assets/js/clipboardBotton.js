let copybtn = document.getElementById("copy-btn");
let link = document.getElementById("link");

copybtn.onclick = function () {
    navigator.clipboard.writeText(link.innerHTML);
    copybtn.innerHTML = "Copiado"
    setTimeout(function (){
        copybtn.innerHTML = "Copiar"
    }, 2000)
}