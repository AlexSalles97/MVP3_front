import { useState } from "react";
import { Link } from "react-router-dom";

export default function Item(props) {
  const [quantity, setQuantity] = useState(1);
  const [valueButton, setValueButton] = useState(true);
  const { product, addToCart } = props;
  const minus = () => {
    if (quantity - 1 === 1) {
      setValueButton(true);
    }

    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };

  const plus = () => {
    setValueButton(false);
    setQuantity(quantity + 1);
  };

  const buyProduct = () => {
    const userConfirmed = window.confirm('Deseja adicionar este produto ao carrinho?');
    if (userConfirmed) {
      addToCart(product.id, quantity);
      alert('Produto adicionado ao carrinho!');
      setQuantity(1);
      setValueButton(true);
    }
  };

  return (
    <article className="product">
      <img src={product.image} alt="product" />
      <h3 className="price-product">
        R$ <span>{product.price}</span>
      </h3>
      <Link to={`/products/${product.id}`} state={{ p: product }}>
        <p className="name-product">{product.title} </p>
      </Link>
      <div className="quantity">
        <span>Quantidade:</span>
        <button disabled={valueButton} className="minus" onClick={minus}>
          -
        </button>
        <span>{quantity}</span>
        <button className="plus" onClick={plus}>
          +
        </button>
      </div>
      <button className="buy" onClick={buyProduct}>
        Comprar
      </button>
    </article>
  );
}