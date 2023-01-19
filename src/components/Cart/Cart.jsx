import PropTypes from "prop-types";

import sprite from "../../assets/icons/sprite.svg";
import {
  BtnRemoveProduct,
  BtnSubmit,
  ButtonClose,
  CartContainer,
  ProductCurrency,
  ProductItemDescr,
  ProductPrice,
  ProductsList,
  ProductsListItem,
  ProductTitle,
} from "./Cart.styled";

const Cart = ({ isOpen, closeCart, productsToCart, removeProduct }) => {
  return (
    <CartContainer isOpen={isOpen}>
      <ButtonClose type="button" onClick={closeCart}>
        <svg>
          <use href={sprite + "#icon-cross"}></use>
        </svg>
      </ButtonClose>
      {productsToCart.length > 0 ? (
        <>
          <ProductsList>
            {productsToCart.map(({ url, model, price, currency, quantity }) => (
              <ProductsListItem key={model}>
                <img src={url} alt={model} />
                <ProductItemDescr>
                  <ProductTitle isSale={true}>{model}</ProductTitle>
                  <ProductPrice>{price}</ProductPrice>
                  <ProductCurrency>{currency}</ProductCurrency>
                </ProductItemDescr>
                <p>К-сть - {quantity}</p>
                <BtnRemoveProduct
                  type="button"
                  onClick={() => removeProduct(model)}
                >
                  <svg>
                    <use href={sprite + "#icon-bin2"}></use>
                  </svg>
                </BtnRemoveProduct>
              </ProductsListItem>
            ))}
          </ProductsList>
          <BtnSubmit type="button">Submit</BtnSubmit>
        </>
      ) : (
        <h2>Корзина порожня :( </h2>
      )}
    </CartContainer>
  );
};

Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeCart: PropTypes.func.isRequired,
  productsToCart: PropTypes.array.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default Cart;
