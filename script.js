// contador de produtos
let total = 0;

// função para adicionar produto
function adicionarProduto() {

    let input = document.getElementById("produto");
    let nomeProduto = input.value;

    let mensagem = document.getElementById("mensagem");

    // validação do campo vazio
    if (nomeProduto === "") {
        mensagem.textContent = "Digite um produto!";
        return;
    }

    mensagem.textContent = "Produto adicionado com sucesso!";

    let lista = document.getElementById("lista");

    // cria item da lista
    let item = document.createElement("li");

    let texto = document.createElement("span");
    texto.textContent = nomeProduto;

    // botão comprado
    let btnComprado = document.createElement("button");
    btnComprado.textContent = "Comprado";

    btnComprado.onclick = function () {
        texto.classList.toggle("comprado");
    };

    // botão remover
    let btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";

    btnRemover.onclick = function () {
        lista.removeChild(item);

        total--;
        document.getElementById("contador").textContent = total;
    };

    item.appendChild(texto);
    item.appendChild(btnComprado);
    item.appendChild(btnRemover);

    lista.appendChild(item);

    // atualiza contador
    total++;
    document.getElementById("contador").textContent = total;

    // limpa campo
    input.value = "";
}