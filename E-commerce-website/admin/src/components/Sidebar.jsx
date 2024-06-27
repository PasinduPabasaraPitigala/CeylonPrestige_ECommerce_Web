import { Link } from "react-router-dom";
import addProduct from "../assets/images/AddProduct-removebg-preview.png";
import listProduct from "../assets/images/clipboard-icon-front-side-white-background-removebg-preview.png";

const Sidebar = () => {
  return (
    <div
      className={
        "py-7 flex justify-center gap-x-2 gap-y-5 w-full bg-white sm:gap-x-4 lg:flex-col lg:pt-20 lg:max-w-60 lg:h-screen lg:justify-start lg:pl-6"
      }
    >
      <Link to={"/addproduct"}>
        <button
          className={
            "flexCenter gap-2 rounded-md bg-teal-50 ring-1 ring-gray-20 h-14 w-40 xs:w-44 medium-14 sm:medium-16"
          }
        >
          <img src={addProduct} alt={""} height={55} width={55} />
          <span>Add Product</span>
        </button>
      </Link>
      <Link to={"/listproduct"}>
        <button
          className={
            "flexCenter gap-2 rounded-md bg-teal-50 ring-1 ring-gray-20 h-14 w-40 xs:w-44 medium-14 sm:medium-16"
          }
        >
          <img src={listProduct} alt={""} height={56} width={56} />
          <span>Product List</span>
        </button>
      </Link>
    </div>
  );
};
export default Sidebar;
