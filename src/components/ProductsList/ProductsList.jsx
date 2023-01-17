import ProductsListItem from "../ProductsListItem/ProductsListItem";
import "./ProductsList.css";

const ProductsList = (props) => {
  const { products } = props;
  return (
    <ul className="products">
      {products.map(({ url, model, price, currency, id, isSale }) => (
        <ProductsListItem
          key={id}
          url={url}
          model={model}
          price={price}
          currency={currency}
          isSale={isSale}
        />
      ))}
    </ul>
  );
};

export default ProductsList;
