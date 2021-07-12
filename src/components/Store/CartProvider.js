import CartContext from "./CartContext";
import {useReducer} from "react";


const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {

    if (action.type === "ADD") {
        if (!state.items.some(item => {
            return item.id === action.item.id
        })) {
            const updatedItems = [...state.items, action.item];
            const updatedTotalAmount = parseFloat(state.totalAmount) + parseFloat(action.item.amount) * parseFloat(action.item.price);
            console.log(updatedTotalAmount);
            return {items: updatedItems, totalAmount: updatedTotalAmount.toFixed(2)};
        }
    }

    if (action.type === "DELETE") {
        if (state.items.some(item => {
            return item.id === action.id
        })) {
            const  itemToDelete = state.items.find((item) => item.id === action.id);
            const updatedTotalAmount = parseFloat(state.totalAmount) - parseFloat(itemToDelete.amount) * parseFloat(itemToDelete.price);
            const updatedItems = state.items.filter((item) => item.id !== action.id);
            return {items: updatedItems, totalAmount: updatedTotalAmount.toFixed(2)};
        }

    }

    return state;
}
const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = item => {
        console.log("ADD");
        dispatchCartAction({type: "ADD", item: item});
    }

    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: "DELETE", id: id});
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;