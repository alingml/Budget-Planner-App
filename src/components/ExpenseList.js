import React, {useContext} from 'react';
import ExpenseItem from './ExpenseItem';
import AppContext from '../context/AppContext';


const ExpenseList = () => {
    const { expenses } = useContext(AppContext)

    //Passing the ID, name and cost to the ExpenseItem component as props
    return (

        <ul className = 'list-group'>
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />

            ))}
    </ul>
    )
}

export default ExpenseList;