import classes from './MealItemForm.module.css';
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import {useContext, useState} from "react";
import CartContext from "../Store/CartContext";

const MealItemForm = props => {

    const input = {id:"amount",type:"number", step :1, min:1, max:10, defaultValue:1};

    const cartCtx = useContext(CartContext);
    const [amount, setAmount] = useState(1);


    const clickHandler= ()=>{
        console.log(amount);
        const meal = {...props.meal, amount:amount};
        cartCtx.addItem(meal);
    }

    const changeHandler = (event)=>{
        console.log(event.target.value);
        setAmount(event.target.value);
    }
    return (<form className={classes.form}>
        <Input label="Amount" value={amount} input={input}  onChange={changeHandler}/>
        <Button onClick={clickHandler}>+Add </Button>
    </form>);
}

export default MealItemForm;