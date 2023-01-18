import PropTypes from "prop-types";
import clsx from "clsx";
import s from "./ProductsListItem.module.css";

const ProductsListItem = ({ url, model, price, currency, isSale }) => {
  return (
    <li className={s.item}>
      <div className={s.imageWrapper}>
        {/* {isSale && <p className={s.sale}>Акція</p>} */}
        {/* <p className={isSale ? s.saleIsActive : s.sale}>Акція</p> */}
        <p className={clsx(s.sale, isSale && s.isActive)}>Акція</p>

        <img className={s.image} src={url} alt={model} />
      </div>
      <div className={s.descr}>
        <h3 className={s.model}>{model}</h3>

        {!price ? (
          <span className={s.price}>Товару нема в наявності</span>
        ) : (
          <>
            <span className={s.price}>{price}</span>
            <span className={s.currency}>{currency}</span>
          </>
        )}
      </div>
      <button className={s.btnBuy} type="button">
        Купити
      </button>
    </li>
  );
};

ProductsListItem.propTypes = {
  url: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
  ]).isRequired,
  currency: PropTypes.string.isRequired,
  isSale: PropTypes.bool.isRequired,
};

export default ProductsListItem;
