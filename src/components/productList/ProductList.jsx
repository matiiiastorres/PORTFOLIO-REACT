import "./productList.css";
import Product from "../../components/product/Product";
import { products } from "../data";

const ProductList = () => {
  return (
    <div className="pl" id="productlist">
      <div className="pl-texts">
        <h1 className="pl-title"> Create & inspire.its Matiii </h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          dignissimos ad beatae odit, quod natus.
        </p>
      </div>

      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
