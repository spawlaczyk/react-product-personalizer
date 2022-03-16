import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
      {products.map(product => <Product 
      key={product.id}
      id={product.id}
      basePrice={product.basePrice}
      title={product.title}
      colors={product.colors}
      sizes={product.sizes}
      name={product.name} />)}
    </section>
  );
};

export default Products;