import type { RootState } from "./redux/store";
import * as Styles from "./App.css";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Foooter/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function App() {
  const { opacityMenu } = useSelector((state: RootState) => state.cart);

  return (
    <Styles.MainApp>
      <motion.div animate={{ opacity: opacityMenu }}>
        <Cart />
      </motion.div>
      <Header />
      <Products />
      <Footer />
    </Styles.MainApp>
  );
}

export default App;
