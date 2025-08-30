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
  