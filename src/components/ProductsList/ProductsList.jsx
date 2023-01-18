import PropTypes from "prop-types";
import ProductsListItem from "../ProductsListItem/ProductsListItem";
import s from "./ProductsList.module.scss";

const ProductsList = (props) => {
  const { products, type } = props;
  return (
    <ul className={s.container}>
      {products.map(({ id, ...rest }) => (
        <ProductsListItem
          key={id}
          {...rest}
          // url={url}
          // model={model}
          // price={price}
          // currency={currency}
          // isSale={isSale}
        />
      ))}
    </ul>
  );
};

ProductsList.propTypes = {
  // products: PropTypes.array.isRequired,
  // products: PropTypes.arrayOf(PropTypes.object).isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
  // type: PropTypes.oneOf(["income", "expense"]).isRequired
};

export default ProductsList;
