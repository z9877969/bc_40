import styled from "styled-components";
// import {Field} from "formik"

// const Input = styled(Field)`
//  /*  */
//  /*  */
//  /*  */
//  /*  */
//  /*  */
//  /*  */
//  /*  */
// `

export const CartContainer = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  width: 400px;
  height: 500px;
  background-color: darkslategray;
  overflow-y: scroll;
  padding: 20px 15px 30px;
  z-index: 25;
  transition: transform 0.5s linear;

  ${(props) => {
    return props.isOpen ? "transform: translateX(-100%);" : "";
  }}
`;

export const ButtonClose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-left: auto;
  margin-bottom: 20px;
  background-color: lightslategray;
  border: 1px solid #212121;
  border-radius: 50%;

  & svg {
    width: 15px;
    height: 15px;
  }
`;

export const ProductsList = styled.ul`
  margin-bottom: 20px;
`;

export const ProductsListItem = styled.li`
  display: flex;

  align-items: center;
  margin: 0;
  padding: 5px;
  height: 100px;
  border: 1px solid #212121;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  & img {
    width: 70px;
    height: 100%;
  }
`;

export const ProductItemDescr = styled.div`
  margin-left: 20px;
  padding: 10px;
  color: bisque;
`;

export const ProductTitle = styled.h3`
  color: ${({ isSale, theme }) =>
    isSale ? theme.color.warning : theme.color.success};
`;

export const ProductPriceDescr = styled.span`
  font-size: 16px;
  color: red;
`;

export const ProductPrice = styled(ProductPriceDescr)``;

export const ProductCurrency = styled(ProductPriceDescr)`
  font-weight: bold;
`;

export const Btn = styled.button`
  border: none;
  background-color: burlywood;
`;

export const BtnRemoveProduct = styled(Btn)`
  margin-left: auto;
  padding: 10px;
  border-radius: 10px;

  & svg {
    width: 30px;
    height: 30px;
    fill: rgb(75, 102, 75);
  }
`;

export const BtnSubmit = styled(Btn)`
  padding: 10px 20px;
  border-radius: 3px;
  font-size: 24px;
`;
