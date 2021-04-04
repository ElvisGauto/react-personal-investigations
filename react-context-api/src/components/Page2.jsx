import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

export const Page2 = () => {

    const { data } = useContext(DataContext);

    return (
        <div>
           <h1>Pagina 2</h1> 
           <hr/>
           <pre>
                { JSON.stringify(data, null, 2) }
            </pre>
        </div>
    )
}
