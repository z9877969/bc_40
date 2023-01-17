const ProductsListItem = ({ url, model, price, currency, isSale }) => {
  
  return (
    <li className="products__item">
      <div className="products__image-wrapper">
        {/* <p
          className={`products__sale ${
            isSale ? "products__sale--isActive" : ""
          }`}
        >
          Акція
        </p> */}
        {isSale && <p className="products__sale">Акція</p>}

        <img className="products__image" src={url} alt={model} />
      </div>
      <div className="products__descr">
        <h3 className="products__model">{model}</h3>

        {!price ? (
          <span className="products__price">Товару нема в наявності</span>
        ) : (
          <>
            <span className="products__price">{price}</span>
            <span className="products__currency">{currency}</span>
          </>
        )}
      </div>
      <button className="products__btn-buy" type="button">
        Купити
      </button>
    </li>
  );
};

export default ProductsListItem;
