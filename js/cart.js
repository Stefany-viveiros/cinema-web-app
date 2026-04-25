let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ➕ ADICIONAR ITEM
window.addToCart = function(item, price) {
  const existing = cart.find(c => c.item === item);

  if (existing) {
    existing.qtd += 1;
  } else {
    cart.push({ item, price, qtd: 1 });
  }

  saveCart();
  renderCart();
};

// ❌ REMOVER ITEM
window.removeFromCart = function(item) {
  cart = cart.filter(c => c.item !== item);
  saveCart();
  renderCart();
};

// 💾 SALVAR
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// 🎨 RENDERIZAR
function renderCart() {
  const cartDiv = document.getElementById('cart');

  // 🔥 ESSENCIAL: evita erro em páginas que não têm carrinho
  if (!cartDiv) return;

  let total = 0;

  cartDiv.innerHTML = '<h4>🛒 Seu Pedido</h4>';

  cart.forEach(c => {
    const subtotal = c.price * c.qtd;
    total += subtotal;

    cartDiv.innerHTML += `
      <div class="cart-item">
        <span>${c.item} x${c.qtd}</span>
        <span>R$ ${subtotal}</span>
        <button onclick="removeFromCart('${c.item}')">❌</button>
      </div>
    `;
  });

  cartDiv.innerHTML += `
    <hr>
    <h3>Total: R$ ${total}</h3>
    <button class="pay-btn" onclick="finishOrder()">💳 Finalizar Pedido</button>
  `;
}

// 💳 FINALIZAR PEDIDO (NOVO)
window.finishOrder = function() {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  alert("Pedido realizado com sucesso! 🍿🎬");

  cart = [];
  saveCart();
  renderCart();
};

// 🔄 CARREGA AO ABRIR
document.addEventListener("DOMContentLoaded", renderCart);