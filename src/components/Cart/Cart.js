import classes from './Cart.module.css';
import Modal from "../UI/Modal/Modal";
import {useContext} from "react";
import CartContext from "../Store/CartContext";
import CartItem from "./CartItem";


const Cart = props => {

    const cartCtx = useContext(CartContext);
    const cartItemRemoveHandler = (id) => {
        console.log("id:"+id);
        cartCtx.removeItem(id);
    };


    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                />
            ))}
        </ul>
    );
    return (
        <Modal onClose={props.onCloseModal}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{`$${cartCtx.totalAmount}`}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseModal}> Close</button>
                {cartCtx.items.length > 0 && <button className={classes.button}> Order </button>}
            </div>
        </Modal>
    );
}

export default Cart;