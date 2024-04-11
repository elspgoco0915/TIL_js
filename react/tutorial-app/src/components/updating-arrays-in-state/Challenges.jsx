import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

const ShoppingCart = () => {
  const [products,setProducts] = useState(initialProducts)
  const handleIncreaseClick = (productId) => {
    setProducts(products.map(product => {
      return (productId === product.id) 
        ? {...product, count: product.count + 1} 
        : product;
    }));
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}

const Challenges = () => {
  return (
    <>
      <h1>Challenges</h1>
      <h2>1.</h2>
      <ShoppingCart />
    </>
  );
}

export default Challenges;