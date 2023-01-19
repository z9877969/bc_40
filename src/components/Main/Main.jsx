import PropTypes from "prop-types";
import Section from "../Section/Section";
import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import products from "../../data/products.json";
import { useState } from "react";

const containerStyles = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "red",
};

const Main = ({ addToCart }) => {

  return (
    <Section>
      <div style={containerStyles}>
        <Filter />
        <ProductsList products={products} addToCart={addToCart} />
      </div>
    </Section>
  );
};

Main.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Main;
