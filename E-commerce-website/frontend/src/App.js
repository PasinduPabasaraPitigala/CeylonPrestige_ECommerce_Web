import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import Offer from "./components/Offer";
import Latest from "./components/Latest";

function App() {
  return (
    <main className={"bg-primary text-tertiary"}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="men" element={<Category category={'men'} />} />
          <Route path="women" element={<Category category={'women'} />} />
          <Route path="kids" element={<Category category={'kids'} />} />
          <Route path="personal" element={<Category category={'personal'} />} />
          <Route path="beauty" element={<Category category={'beauty'} />} />
          <Route path={"/customerCare"} element={<Category />} />
          <Route path={"/product"} element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path={"/cart-page"} element={<Cart />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
