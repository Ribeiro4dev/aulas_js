let elementojavascript = document.createElement("h1");

elementojavascript.innerText = "JavaScript_titulo";
elementojavascript.id = "ling-js titulo";

let titulojs = document.querySelector("#titulojs");
titulojs.appendChild(elementojavascript);

console.log(elementojavascript);

// Método complexo: criando elementos e adicionando ao DOM
let produtoDiv = document.getElementById("produto");

// Criar um elemento h2 para o nome do produto
let nomeProduto = document.createElement("h2");
nomeProduto.textContent = "Produto à Venda";

// Criar um elemento p para a descrição do produto
let descricaoProduto = document.createElement("p");
descricaoProduto.textContent = "Descrição do produto: Este é um produto incrível que você vai adorar.";

// Criar um elemento p para o preço do produto
let precoProduto = document.createElement("p");
precoProduto.textContent = "Preço: R$ 50,00";

// Criar um elemento img para a imagem do produto
let imagemProduto = document.createElement("img");
imagemProduto.src = "img/produto1.png";
imagemProduto.alt = "Imagem do produto";

// Adicionar os elementos criados à div "produto"
produtoDiv.appendChild(nomeProduto);
produtoDiv.appendChild(descricaoProduto);
produtoDiv.appendChild(precoProduto);
produtoDiv.appendChild(imagemProduto);

