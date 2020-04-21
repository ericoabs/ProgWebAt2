

var botaoAdicionar = document.querySelector("#adicionar-produto");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var produto = obtemprodutoDoFormulario(form);

    var produtoTr = montaTr(produto);

    var tabela = document.querySelector("#tabela-produtos");

    tabela.appendChild(produtoTr);

    form.reset();
});


function obtemprodutoDoFormulario(form) {

    var produto = {
        nome: form.nome.value,
        quantidade: form.quantidade.value,
   
      
    
    }

    return produto;
}

function montaTr(produto) {
    var produtoTr = document.createElement("tr");
    produtoTr.classList.add("produto");
    btn = document.createElement("button");
    btn.innerHTML = "Deletar";
    btn.classList.add("deletar");

   

    produtoTr.appendChild(montaTd(produto.nome, "info-nome"));
    produtoTr.appendChild(montaTd(produto.quantidade, "info-quantidade"));
    produtoTr.appendChild(btn);

    return produtoTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

