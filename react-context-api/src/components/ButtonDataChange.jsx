import React, { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

const data = {
    name: 'Pedro',
    age: '40'
}

export const ButtonDataChange = () => {

    const { setData } = useContext(DataContext);

    return (
        <div>
            <button 
                className="btn btn-primary"
                onClick={ () => setData(data) }
            >
                Change Data
            </button>
        </div>
    )
}
