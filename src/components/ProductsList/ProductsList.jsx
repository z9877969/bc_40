import PropTypes from "prop-types";
import ProductsListItem from "../ProductsListItem/ProductsListItem";
import s from "./ProductsList.module.scss";

const ProductsList = (props) => {
  const { products, addToCart } = props;
  return (
    <ul className={s.container}>
      {products.map(({ id, ...rest }) => (
        <ProductsListItem key={id} {...rest} addToCart={addToCart} />
      ))}
    </ul>
  );
};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductsList;
