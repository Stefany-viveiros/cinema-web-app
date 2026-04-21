let cart = [];

window.addToCart = function(item, price) {
  cart.push({ item, price });
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById('cart');
  let total = 0;

  cartDiv.innerHTML = '<h4>Pedido:</h4>';

  cart.forEach(c => {
    total += c.price;
    cartDiv.innerHTML += `<p>${c.item} - R$${c.price}</p>`;
  });

  cartDiv.innerHTML += `<hr>Total: R$${total}`;
}