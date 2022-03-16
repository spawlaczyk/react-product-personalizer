import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentColor, setCurrentColor] = useState(props.colors[0]);

  const prepareColorClassName = color => {
    return (
      styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()]
    );
  }

  const getPrice = basePrice => {
    return (
      basePrice + props.sizes.find(({name}) => name === currentSize).additionalPrice
    );
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Summary');
    console.log('=============');
    console.log('Name: ', props.title);
    console.log('Price: ', getPrice(props.basePrice), '$');
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice(props.basePrice)}$</span>
        </header>
        <form onSubmit={handleSubmit}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => 
              <li key={size.name}>
                <button type='button' onClick={() => setCurrentSize(size.name)} className={clsx(size.name === currentSize && styles.active)}>{size.name}</button>
              </li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(item => 
                <li key={item}>
                  <button type='button' onClick={() => setCurrentColor(item)} className={clsx(prepareColorClassName(item), item === currentColor && styles.active)} />
                </li>)}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired
};

export default Product;