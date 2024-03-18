let carrinho = [];

function comprar(modelo) {
  carrinho.push(modelo);
  atualizarCarrinho();
}

function mostrarCarrinho() {
  document.getElementById('carrinho').style.display = 'block';
}

function atualizarCarrinho() {
  const listaCarrinho = document.getElementById('lista-carrinho');
  listaCarrinho.innerHTML = '';
  carrinho.forEach((modelo, index) => {
    const li = document.createElement('li');
    li.textContent = modelo;
    listaCarrinho.appendChild(li);
  });
  document.getElementById('cart').textContent = Carrinho `(${carrinho.length})`;
}

function limparCarrinho() {
  carrinho = [];
  atualizarCarrinho();
  document.getElementById('carrinho').style.display = 'none';
}