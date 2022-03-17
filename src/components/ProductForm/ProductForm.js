import OptionColor from '../ProductOptions/OptionColor';
import OptionSize from '../ProductOptions/OptionSize';
import Button from '../Button/Button';
import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';

const ProductForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize}/>
      <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>  
  );
}

ProductForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default ProductForm;