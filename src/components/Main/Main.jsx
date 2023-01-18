import Section from "../Section/Section";
import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import products from "../../data/products.json";
// import "./Main.css";

const containerStyles = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "red",
};

const Main = () => {
  return (
    <Section>
      <div style={containerStyles}>
        <Filter />
        <ProductsList products={products} />
      </div>
    </Section>
  );
};

export default Main;
