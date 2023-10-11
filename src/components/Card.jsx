import { useState, useEffect } from "react";

export const Card = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/cards")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }

      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      setAllProducts([...allProducts, product]);
    };

  return (
    <div className="container-items">
      {data?.map((product) => (
        <div className="item" key={product.id}>
          <figure>
            <img src={product.image} alt={product.title} />
          </figure>
          <div className="info-product">
            <h2>{product.title}</h2>
            <h5>{product.description}</h5>
            <p className="price">${product.price}</p>
            <button onClick={() => onAddProduct(product)}>
              Añadir al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
