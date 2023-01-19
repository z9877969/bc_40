import { Component } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Cart from "../Cart/Cart";
// import Counter from "../Counter/Counter";

class App extends Component {
  state = {
    isCartOpen: false,
    productsToCart: [], // el -> {url, model, price, currency, quantity: 2}
  };

  addToCart = (product) => {
    this.setState((prev) => {
      const isProductExist = prev.productsToCart.some(
        (el) => el.model === product.model
      );
      return {
        productsToCart: isProductExist
          ? prev.productsToCart.map((el) =>
              el.model !== product.model
                ? el
                : { ...el, quantity: el.quantity + 1 }
            )
          : [...prev.productsToCart, { ...product, quantity: 1 }],
      };
    });
  };

  removeProduct = (model) => {
    this.setState((prev) => {
      const mustProductRemove =
        prev.productsToCart.find((el) => el.model === model).quantity <= 1;
      return {
        productsToCart: mustProductRemove
          ? prev.productsToCart.filter((el) => el.model !== model)
          : prev.productsToCart.map((el) =>
              el.model !== model ? el : { ...el, quantity: el.quantity - 1 }
            ),
        // productsToCart: prev.productsToCart.filter((el) => el.model !== model),
      };
    });
  };

  openCart = () => {
    this.setState({ isCartOpen: true });
  };

  closeCart = () => {
    this.setState({ isCartOpen: false });
  };

  render() {
    const { isCartOpen, productsToCart } = this.state;

    return (
      <>
        <Header openCart={this.openCart} />
        <Main addToCart={this.addToCart} />
        <Cart
          isOpen={isCartOpen}
          closeCart={this.closeCart}
          productsToCart={productsToCart}
          removeProduct={this.removeProduct}
        />
        {/* <Counter /> */}
      </>
    );
  }
}

export default App;

const contactsCollection = [{ name: "qwe", number: "32131" }];

const checkContact = ({ name, number }) => {
  const normalizedName = name.toLowerCase();
  
  contactsCollection.some((el) => el.name.toLowerCase() === normalizedName);
};

// Bob === bob