import { Section } from "../Main/Main";
import ProductsListItem from "../ProductsListItem/ProductsListItem";
import "./ProductsList.css";
// import products from "../../data/products.json";

const ProductsList = (props) => {
  const { products, children } = props;
  console.log("children :>> ", children);
  return (
    <Section title={"ProductsList"}>
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
    </Section>
  );
};

export default ProductsList;
