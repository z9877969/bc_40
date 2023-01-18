import "./Cart.css";
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

const Cart = () => {
  return (
    <CartContainer isOpen={true}>
      <ButtonClose type="button">
        <svg>
          <use href={sprite + "#icon-cross"}></use>
        </svg>
      </ButtonClose>
      <ProductsList>
        <ProductsListItem>
          <img
            src="https://content1.rozetka.com.ua/goods/images/big/238782224.jpg"
            alt=""
          />
          <ProductItemDescr>
            <ProductTitle isSale={true}>ZTE RedMagic</ProductTitle>
            <ProductPrice>11999</ProductPrice>
            <ProductCurrency>UAH</ProductCurrency>
          </ProductItemDescr>
          <BtnRemoveProduct type="button">
            <svg>
              <use href={sprite + "#icon-bin2"}></use>
            </svg>
          </BtnRemoveProduct>
        </ProductsListItem>
      </ProductsList>
      <BtnSubmit type="button">Submit</BtnSubmit>
    </CartContainer>
  );
};

export default Cart;
