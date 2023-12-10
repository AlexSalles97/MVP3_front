import React from 'react';

const CartItem = ({ item, removeFromCart, productList }) => {
  const product = productList.find((p) => p.id === item.id);

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.name} />
      <div className="item-details">
        <span>{product.title}</span>
        <p>{product.price}</p>
      </div>
      <div className="quantity">
        <p>Quantidade: {item.quantity}</p>
        <button onClick={() => removeFromCart(item.id)}>Remover</button>
      </div>
    </div>
  );
};

const CartList = ({ cart, removeFromCart, productList, onCloseCart, onBuyClick }) => {
  const calculateTotal = () => {
    if (!Array.isArray(cart) || cart.length === 0) {
      return "0.00";
    }

    return cart.reduce((total, item) => {
      const product = productList.find((p) => p.id === item.id);
      if (product) {
        const price = typeof product.price === 'string' ? parseFloat(product.price.replace('$', '')) : product.price;
        return total + price * item.quantity;
      }

      return total;
    }, 0).toFixed(2);
  };

  const handleBuyClick = () => {
    if (cart.length === 0) {
      alert('Não há produtos na lista de compras.');
    } else {
      const shouldBuy = window.confirm('Deseja confirmar a compra?');
      if (shouldBuy) {
        onBuyClick();
        alert('Compra realizada com sucesso!');
      }
    }
  };

  return (
    <div className="cart">
      <div className='cart-header'>
        <h2>Carrinho<button className="close-button" onClick={onCloseCart}>Fechar</button></h2>
      </div>
      {Array.isArray(cart) && cart.length > 0 ? (
        cart.map((item) => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} productList={productList} />
        ))
      ) : (
        <p>O carrinho está vazio.</p>
      )}

      <div className="total">
        <strong>Total:</strong> ${calculateTotal()}
      </div>
      <button onClick={handleBuyClick}>Comprar</button>
    </div>
  );
};

export default CartList;