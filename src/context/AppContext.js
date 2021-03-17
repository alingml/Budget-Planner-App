import { createContext, useReducer } from "react";

const AppReducer = ( state, action ) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload),
            }
            default:
                return state;
    }
};

const initialState = {
    budget: 45000,
    expenses: [
        {id: 1, name: 'Mega Image Grocery', cost: 40},
        {id: 2, name: 'Sinaia Ski Pass 1 Day', cost: 145},
        {id: 3, name: 'Sinaia Booking', cost: 350},
    ],
};

export const AppContext = createContext(); //context object created

export const AppProvider = (props) => {

const [state, dispatch] = useReducer(AppReducer, initialState);

return(
    <AppContext.Provider
    value={{
        budget:state.budget,
        expenses: state.expenses,
        dispatch,
    }}
    >
        {props.children}
    </AppContext.Provider>
    );
};


export default AppContext