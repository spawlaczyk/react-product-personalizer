import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentColor, setCurrentColor] = useState(props.colors[0]);

  const getPrice = useMemo(() => {
    return props.basePrice + props.sizes.find(({name}) => name === currentSize).additionalPrice
  }, [props.basePrice, props.sizes, currentSize]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Summary');
    console.log('=============');
    console.log('Name: ', props.title);
    console.log('Price: ', getPrice, '$');
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  }

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} title={props.title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm 
          handleSubmit={handleSubmit}
          sizes={props.sizes}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          colors={props.colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          prepareColorClassName={props.prepareColorClassName}
          />
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  getPrice: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default Product;