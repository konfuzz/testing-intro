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

function changeQuantity(cart, itemId, newQuantity) {
  const existingItem = cart.find((cartItem) => cartItem.id === itemId);
  const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === itemId);

  if (!existingItem) {
    return cart;
  }

  if (newQuantity <= 0) {
    throw new RangeError('Количество должно быть больше нуля');
  }


  if (newQuantity > existingItem.stock) {
    throw new RangeError('Нельзя добавить в корзину больше, чем есть в наличии');
  }

  cart[existingItemIndex].quantity = newQuantity;
  return cart;
}

function removeFromCart(cart, itemId) {
  const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === itemId);
  if (existingItemIndex !== -1) {
    cart.splice(existingItemIndex, 1);
  }
  return cart;
}

function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
