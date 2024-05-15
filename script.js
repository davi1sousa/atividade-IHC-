/* document.addEventListener("DOMContentLoaded", function() {
  // Quando a página carregar completamente
  var nomeUsuario = prompt("Bem-vindo! Por favor, digite seu nome:");
  
  if (nomeUsuario !== null && nomeUsuario !== "") {
      alert("Olá, " + nomeUsuario + "! Bem-vindo à nossa loja de moda.");
  } else {
      alert("Bem-vindo à nossa loja de moda.");
  }
}); */

document.addEventListener("DOMContentLoaded", ()=> {
  let linksSecao = document.querySelectorAll('.produto');
  console.log(linksSecao);
  linksSecao.forEach((link) => {
      link.addEventListener('click', (e)=> {
          e.preventDefault(); // Impede o comportamento padrão de seguir o link
          var targetClass = this.textContent.toLowerCase(); // Obtém o texto do link e converte para minúsculas
          var targetSection = document.querySelector('.' + targetClass); // Encontra a seção com a classe correspondente
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até a seção de destino
          }
      });
  });
});

