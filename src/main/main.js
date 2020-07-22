import React from 'react'
import {NavLink} from 'react-router-dom'

import './main.css'

const Main = ()=>{
    return(
        <div className={`main`}>
            <NavLink to='/'>Главная</NavLink>
            <NavLink to='/employees'>Сотрудники</NavLink>
        </div>
    )
}

export default Main