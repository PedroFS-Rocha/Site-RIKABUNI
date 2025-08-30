class CabecalhoSite extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <button class="menu-btn" onclick="abrirMenu()">☰</button>
       
      <div id="menu-lateral" class="menu-lateral">
          <a href="javascript:void(0)" class="fechar-btn" onclick="fecharMenu()">×</a>
          <a href="index.html">Página Inicial</a>
          <a href="catalogo.html">Catálogo da Loja</a>
          <a href="contato.html">Nossa História</a>
      </div>
      `;
    }
  }

  customElements.define('cabecalho-site', CabecalhoSite);
  
  function abrirMenu() {
    document.getElementById("menu-lateral").style.width = "250px";
  }
  
  function fecharMenu() {
    document.getElementById("menu-lateral").style.width = "0";
  }