import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import carro from '../assets/carrinho.png';
import logo from '../assets/logo.PNG';
import Item from '../components/Item';
import CartList from '../components/CartList';
import products from '../products.json';

export default function Products() {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setProductList(products.hardwares);
  }, []);

  const addToCart = (productId, quantity) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId]) {
        // Se o produto já existe no carrinho, aumenta a quantidade
        updatedCart[productId].quantity += quantity;
      } else {
        // Se o produto não existe no carrinho, adiciona com quantidade fornecida
        updatedCart[productId] = { ...productList.find(p => p.id === productId), quantity };
      }
  
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId]) {
        updatedCart[productId].quantity -= 1;

        if (updatedCart[productId].quantity <= 0) {
          delete updatedCart[productId];
        }
      }

      return updatedCart;
    });
  };

  const onBuyClick = () => {
    setCart({}); // Limpa o carrinho definindo-o como um objeto vazio
  };

  return (
    <div className="content-product">
      <header>
        <div className="user">
          <span>Carrinho</span>
          <button onClick={() => setShowCart(!showCart)}>
            <img className="cart-icon" src={carro} alt="Carrinho" /></button>
        </div>
        <button className="back" onClick={() => navigate('/')}>Voltar</button>
      </header>

      <section className="banner">
        <img src={logo} alt="Logo" />
      </section>


      <section className="main-products">
        {productList.map((p, index) => (
          <Item
            key={index}
            product={p}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </section>

      {showCart && (
        <div className="cart-list-container">
          <CartList
            cart={Object.values(cart)}
            removeFromCart={removeFromCart}
            productList={productList}
            onCloseCart={() => setShowCart(false)}
            onBuyClick={onBuyClick}
          />
        </div>
      )}

      <footer>
        <p className="footer-text">&copy; 2023 Sallesianismo Store. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}