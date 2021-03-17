import React ,{ useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {

    const {budget, expenses} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
},0)

    // If the expenses are over the budget we would like to render a red background color
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return(
        <div className = {`alert ${alertType}`}>
            <span>Remaining: {budget - totalExpenses} RON</span>
        </div>
    );
};

export default Remaining;