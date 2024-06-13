import product from "../pages/Product";
import { MdStar } from "react-icons/md";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const ProductDispaly = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <section>
      <div className={"flex flex-col gap-14 xl:flex-row"}>
        <div className={"flex gap-x-2 xl:flex-1"}>
          <img src={product.image} alt={""} />
        </div>

        <div className={"flex-col flex xl:flex-[1.7]"}>
          <h3 className={"h3"}>{product.name}</h3>
          <div className={"flex gap-2 text-secondary medium-22"}>
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
          </div>
          <div className={"flex gap-x-6 medium-20 my-4"}>
            <div className={"line-through text-secondary font-sans"}>
              RS. {product.old_price}.00
            </div>
            <div className={"text-orange-700 font-sans"}>
              RS. {product.new_price}.00
            </div>
          </div>
          <div className={"mb-4"}>
            {/*<h4 className={'bold-16'}>Select Size:</h4>
                    <div className={'flex gap-4 my-3'}>
                        <div className={'ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer'}>S</div>
                        <div className={'ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer'}>M</div>
                        <div className={'ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer'}>L</div>
                        <div className={'ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer'}>XL</div>
                    </div>*/}
            <div className={"flex flex-col gap-y-3 mb-4 max-w-[555px]"}>
              <button
                onClick={() => {
                  addToCart(product.id);
                }}
                className={
                  "btn_dark_outline !rounded-none uppercase regular-14 tracking-widest"
                }
              >
                Add to Cart
              </button>
              <button
                className={
                  "btn_dark_rounded !rounded-none uppercase regular-14 tracking-widest"
                }
              >
                Buy it now
              </button>
            </div>
            {/*<p><span>Category : </span>Women | Jacket | Winter</p>
                    <p><span>Tag : </span>Modern | Latest </p>*/}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductDispaly;
