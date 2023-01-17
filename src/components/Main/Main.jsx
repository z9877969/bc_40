import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import products from "../../data/products.json";
import "./Main.css";

export const Section = ({ children, title }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

const userStatus = "student";

const Main = () => {
  // products
  let userStatusColor;
  switch (userStatus) {
    case "admin":
      userStatusColor = "class__red";
      break;
    case "student":
      userStatusColor = "class__green";
      break;
    case "teacher":
      userStatusColor = "class__yellow";
      break;
    default:
      userStatusColor = "class__blue";
  }
  // const userStatusColor =
  //   userStatus === "admin"
  //     ? "class__red"
  //     : userStatus === "student"
  //     ? "class__green"
  //     : userStatus === "teacher"
  //     ? "class__yellow"
  //     : "class__blue";
  return (
    <Section>
      <div className={`main__container ${userStatusColor}`}>
        <Filter />
        <ProductsList products={products}>{{ obj: [321] }}</ProductsList>
        {/* {ProductsList({ a: "qwe", b: 21, c: true })} */}
      </div>
    </Section>
  );
};

export default Main;

// {
//   <section>
//     <div className="container">
//       <h2>Title</h2>
//       <ul>
//         <li>Item</li>
//         <li>Item</li>
//         <li>Item</li>
//       </ul>
//     </div>
//   </section>;
//   <section>
//     <div className="container">
//       <h2>Title-2</h2>
//       <ul>
//         <li>Itemqewr</li>
//         <li>Itemqewr</li>
//         <li>Itemqewr</li>
//       </ul>
//     </div>
//   </section>;
// }
