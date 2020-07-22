import React from 'react'

const Employee = ({name, id, removeEmployeeCb})=>{

    const removeEmployee =()=>{
        removeEmployeeCb(id)
    }

    return(
        <div className={`employee`}>
            {name}
            <button onClick={removeEmployee}>Remove employee</button>
        </div>
    )
}

export default Employee