console.log("Olá, mundo!");
console.log("A conexão com JavaScript está funcionando!");

const autor = document.getElementsByClassName("post-autor");
console.log(autor);
console.log(autor.innerText);
console.log(autor[0]);

const post2 = document.getElementById("post02");
console.log(post2);

const formulario = document.getElementById("formulario");
console.log(formulario);

const posts_section = document.getElementById("posts");
console.log(posts_section);

const datapost = document.getElementsByClassName("post-data");
console.log(datapost);

const post = document.getElementsByClassName("post-texto");
console.log(post);

const listaredes = document.getElementsByClassName("lista_redes");
console.log(listaredes);

let linkprimeiropost = document.querySelector("#post01 a");
console.log(linkprimeiropost);
console.log(linkprimeiropost.href);
console.log(linkprimeiropost.innerText);
console.log(linkprimeiropost.innerHTML);
linkprimeiropost = "novo titulo em JS";

const PalavraEmNegrito = document.querySelector("#post02 strong");
console.log(PalavraEmNegrito);

const inputnome = document.querySelector("#nome");
console.log(inputnome);
console.log(inputnome.value);

const linksredes = document.querySelectorAll("footer .lista_redes a");
console.log(linksredes);
console.log(linksredes[0].innerText);
console.log(linksredes[1].innerText);
console.log(linksredes[2].innerText);
console.log(linksredes[0].href);
console.log(linksredes[1].href);
console.log(linksredes[2].href);

let titulos = document.querySelectorAll('footer .lista_redes a');

 

function imprimirTodos(lista){

    console.log(`A lista contém ${lista.length} elementos.`);

    for (let i = 0; i < titulos.length; i++){

        console.log(titulos[i].innerText)

        console.log(titulos[i].href)

    }

}

imprimirTodos(titulos);


