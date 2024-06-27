import Admin from "./pages/Admin.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  return (
    <main className={"bg-primary text-tertiary "}>
      <Navbar />
      <Admin />
    </main>
  );
}
