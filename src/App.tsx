import * as Styles from "./App.css";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Foooter/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  return (
    <Styles.MainApp>
      <Cart />
      <Header />
      <Products />
      <Footer />
    </Styles.MainApp>
  );
}

export default App;
