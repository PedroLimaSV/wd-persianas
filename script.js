// Seleciona o botão pelo ID e adiciona uma ação de clique
document.getElementById("meuBotao").addEventListener("click",function() {
    alert("voce clicou");
});

// Seleciona o botão da Página 1
const pagina2=document.getElementById("pagina2");
pagina2.addEventListener("click",function(){
    window.location.href="pagina2.html";
});

