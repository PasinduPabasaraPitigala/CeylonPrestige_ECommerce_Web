import Sidebar from "../components/Sidebar.jsx";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/AddProduct.jsx";
import ListProduct from "../components/ListProduct.jsx";

const Admin = () => {
  return (
    <div className={"lg:flex"}>
      <Sidebar />
      <Routes>
        <Route path={"/addproduct"} element={<AddProduct />} />
        <Route path={"/listproduct"} element={<ListProduct />} />
      </Routes>
    </div>
  );
};
export default Admin;
