import React from 'react'

import './input.css'

function Input({ labelText, type, placeholder, setData, inputArea }) {
    return (
        <>
            <label>{labelText}</label>
            {!inputArea ?
                <input type={type} placeholder={placeholder} onChange={(e)=> setData(e.target.value)}></input> :
                <textarea onChange={(e)=>setData(e.target.value)}></textarea>
            }
        </>
    )
}

export default Input
