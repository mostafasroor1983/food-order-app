import {Fragment} from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = props =>{
    return (<Fragment>
        <MealsSummary />
        <main>
            <AvailableMeals />
        </main>


    </Fragment>);
}

export default Meals;