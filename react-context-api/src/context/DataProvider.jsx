import  React, { createContext, useState } from "react";

export const DataContext = createContext();

const dataFix = {
    name: 'Mauro',
    age: 21
}

// higher order component
export const DataProvider = ({ children }) => {

    const [data, setData] = useState(dataFix);

    return (
        <DataContext.Provider value={{ 
            data,
            setData
        }}>
            { children }
        </DataContext.Provider>
    )
}
