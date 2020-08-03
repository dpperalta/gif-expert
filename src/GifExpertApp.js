import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    //const categories = ['The Big Bang Theory', 'Two and a half men', 'Friends'];
    const [categories, setCategories] = useState(['The Big Bang Theory']);

    //const handleAdd = () => {
        //setCategories([...categories, 'The Simpson']); // También es una forma de mutar el useState
        //setCategories( cats => [...categories, 'The Simpson'] );
    //}

    return(
        <>
            <h2>GifExpert App</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr></hr>
            {/* <button onClick={ handleAdd }>Agregar</button> */}
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key = { category }
                            category={category}
                        />
                    )
                    )
                }
            </ol>
        </>
    );
}

export default GifExpertApp;