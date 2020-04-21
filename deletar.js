
var produtos = document.querySelectorAll(".deletar");

var tabela = document.querySelector("#tabela-produtos");

tabela.addEventListener("click", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});