// script.js
function verProdutos() {
    window.scrollTo({
      top: document.querySelector('.produtos').offsetTop,
      behavior: 'smooth'
    });
  }

  
  function adicionarAoCarrinho(nome, preco) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push({ nome, preco });
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert(`${nome} foi adicionado ao carrinho!`);
}

function adicionarAoCarrinho(nome, preco) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push({ nome, preco });
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  // Exibir mensagem na tela
  const msg = document.getElementById('mensagem-carrinho');
  msg.textContent = `${nome} foi adicionado ao carrinho!`;
  msg.style.display = 'block';

  // Ocultar após 3 segundos
  setTimeout(() => {
    msg.style.display = 'none';
  }, 3000);
}
  