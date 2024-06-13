import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { TbTrash } from "react-icons/tb";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <section className={"max_pad_container pt-28 bg-teal-50 "}>
      <table className={"w-full mx-auto bg-teal-50"}>
        <thead>
          <tr
            className={
              "bg-slate-900/10 regular-18 sm:regular-22 text-start py-12"
            }
          >
            <th className={"p-1 py-2"}>Product</th>
            <th className={"p-1 py-2"}>Title</th>
            <th className={"p-1 py-2"}>Price</th>
            <th className={"p-1 py-2"}>Quantity</th>
            <th className={"p-1 py-2"}>Total</th>
            <th className={"p-1 py-2"}>Remove</th>
          </tr>
        </thead>
        <tbody>
          {all_product.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <tr
                  key={e.id}
                  className={
                    "border-b border-slate-900/20 text-gray-50  p-6 medium-14 text-center"
                  }
                >
                  <td className={"flexCenter"}>
                    <img
                      src={e.image}
                      alt={"image"}
                      height={43}
                      width={43}
                      className={"rounded-lg ring-1 ring-slate-900/5 my-1"}
                    />
                  </td>
                  <td>
                    <div className={"line-clamp-3"}>{e.name}</div>
                  </td>
                  <td className={"font-sans"}>RS. {e.new_price}.00</td>
                  <td className={"w-16 h-16 bg-white font-sans"}>
                    {cartItems[e.id]}
                  </td>
                  <td className={"font-sans"}>
                    RS. {e.new_price * cartItems[e.id]}.00
                  </td>
                  <td>
                    <div
                      className={"bold-22 pl-14 text-red-700 cursor-pointer"}
                    >
                      <TbTrash onClick={() => removeFromCart(e.id)} />
                    </div>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>

      {/*cart Details*/}
      <div
        className={
          "flex flex-col gap-20 my-16 p-8 md:flex-row rounded-md bg-white   w-full max-w-[666px] "
        }
      >
        <div className={"flex flex-col gap-10"}>
          <h4 className={"bold-20"}>Summary</h4>
          <div>
            <div className={"flexBetween py-4"}>
              <h4 className={"medium-16"}>SubTotal : </h4>
              <h4 className={"text-gray-50 font-semibold font-sans"}>
                RS.{getTotalCartAmount()}.00
              </h4>
            </div>
            <hr />
            <div className={"flexBetween py-4"}>
              <h4 className={"medium-16"}>Shipping Fee:</h4>
              <h4 className={"text-gray-50 font-semibold"}>Free</h4>
            </div>
            <hr />
            <div className={"flexBetween py-4"}>
              <h4 className={"bold-18"}>Total :</h4>
              <h4 className={"bold-18 font-sans"}>
                RS.{getTotalCartAmount()}.00
              </h4>
            </div>
          </div>
          <button className={"btn_dark_rounded w-44"}>Checkout</button>
          <div className={"flex flex-col gap-10"}>
            <h4 className={"bold-20 capitalize"}>
              Your coupon code enter here :{" "}
            </h4>
            <div
              className={
                "flexBetween pl-5 h-12 bg-primary rounded-full ring-1 ring-slate-900/10"
              }
            >
              <input
                type={"text"}
                placeholder={"Coupon Code"}
                className={"bg-transparent border-none outline-none"}
              />
              <button className={"btn_dark_rounded"}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CartItems;
