const elementoh1 = document.getElementById("titulo");
elementoh1.innerText = "Desafio Proz";
console.log(elementoh1.innerText);

const link = document.querySelector('a');
link.innerText = "Visite o site da Proz Educação";
console.log(link);

const ul = document.querySelector('ul');
ul.innerHTML = 
`
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;
console.log(ul);

const ol = document.getElementById('lista-ordenada');
ol.innerHTML = 
`
    <li><a href="https://prozeducacao.com.br/">Link 1</a></li>
    <li><a href="https://blog.prozeducacao.com.br/">Link 2</a></li>
    <li><a href="https://prozeducacao.pandape.infojobs.com.br/">Link 3</a></li>
`;
console.log(ol);









