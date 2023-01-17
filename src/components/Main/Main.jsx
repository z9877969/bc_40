import Section from "../Section/Section";
import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import products from "../../data/products.json";
import "./Main.css";

const Main = () => {
  return (
    <Section>
      <div className="main__container">
        <Filter />
        <ProductsList products={products} />
      </div>
    </Section>
  );
};

export default Main;
