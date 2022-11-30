const input = document.querySelector("#image")
var imagem = document.querySelector("#upload")
var imagem2 = document.querySelector("#preview-image")
var t1 = document.querySelector("#text1")
var t2 = document.querySelector("#text2")
var t3 = document.querySelector("#text3")

input.addEventListener("change", function(e){

    const tgt = e.target

    const files = tgt.files;

    const fr = new FileReader()

    fr.onload = function(){
        document.querySelector("#preview-image").src = fr.result
    }

    fr.readAsDataURL(files[0]);

    if(fr){
        imagem.style.display = "none"
        imagem2.style.display = "block"
        t1.style.display = "none"
        t2.style.display = "none"
        t3.style.display = "none"
    }
})