import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {

    //importing the useContext hook and pass our AppContext to it to get values from the global state
    const { budget } = useContext(AppContext);

    return (
        <div className = 'alert alert-secondary'>
            <span>Budget:
                 { budget } RON</span>
        </div>
    );
};

export default Budget;