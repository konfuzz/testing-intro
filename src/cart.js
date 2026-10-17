function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, item, qty) {
  if (!qty) {
    throw new RangeError('Количество должно быть указано и быть больше нуля');
  }
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);

  if (qty > item.stock || (existingItem && existingItem.quantity + qty > item.stock)) {
    throw new RangeError('Нельзя добавить в корзину больше, чем есть в наличии');
  }

  if (existingItem) {
    existingItem.quantity += qty;
    return cart;
  }
  cart.push({ ...item, quantity: qty });
  return cart;
}
function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
