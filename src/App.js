import Header from "./components/Layout/Header";
import { useState} from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Store/CartProvider";


const MEALS = [];

function App() {
    const [visible, setVisible] = useState(false);
    const closeHandler = () => {
        setVisible(false);
    }

    const openHandler = () => {
        setVisible(true);
    }

    return (
        <CartProvider>
            {visible && <Cart onCloseModal={closeHandler}/>}
            <Header onOpenModal={openHandler}/>
            <Meals/>
        </CartProvider>
    );
}

export default App;
