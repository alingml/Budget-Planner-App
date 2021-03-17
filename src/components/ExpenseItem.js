import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';


const ExpenseItems = (props) => {

    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    // Rendering the name and cost of expenses which we get from props

    return (
        <li className = 'list-group-item d-flex justify-content-between align-items-center'>
            {props.name};
            <div>
                <span className = 'badge badge-primary badge-pill mr-3'>{props.cost} RON</span>
                <TiDelete size = '1.5em' onClick = {handleDeleteExpense} style = {{cursor: 'pointer'}}></TiDelete>
            </div>
        </li>
    );
};

export default ExpenseItems;