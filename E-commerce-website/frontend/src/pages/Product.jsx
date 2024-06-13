import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductHD from "../components/ProductHD";
import ProductDispaly from "../components/ProductDispaly";
import ProductDescription from "../components/ProductDescription";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  if (!product) {
    return <div>Product not found!</div>;
  }
  return (
    <section className={"max_padd_container py-28"}>
      <div>
        <ProductHD product={product} />
        <ProductDispaly product={product} />
        <ProductDescription />
        <RelatedProduct />
      </div>
    </section>
  );
};
export default Product;
