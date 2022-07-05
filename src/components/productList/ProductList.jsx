import "./productList.css";
import Product from "../../components/product/Product";
import { products } from "../data";

const ProductList = () => {
  return (
    <div className="pl" id="productlist">
      <div className="pl-texts">
        <h1 className="pl-title"> design & style </h1>
        <p className="pl-desc">
        The design of the pages is futuristic and I use the latest technologies
          to make the components reusable and the pages more dynamic.
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
