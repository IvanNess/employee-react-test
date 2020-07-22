import React, {useEffect, useCallback, useState} from 'react'

import Employee from '../employee'
import AddEmployeePanel from '../add-employee-panel'
import useFetch from '../useFetch'

const Employees = ()=>{

    const [{data, isLoading, error}, doFetch] = useFetch('http://dummy.restapiexample.com/api/v1/employees')
    const doFetchCb = useCallback(doFetch, [])

    const [employees, setEmployees] = useState(null)

    useEffect(()=>{
        doFetchCb()
    }, [doFetchCb])

    useEffect(()=>{
        setEmployees(data? data.data: null)
    }, [data])

    const [openAddEmployeePanel, setOpenAddEmployeePanel] = useState(false)

    const addEmployee = ()=>{
        setOpenAddEmployeePanel(true)
    }

    const addEmployeeCb = (employee)=>{
        setOpenAddEmployeePanel(false)
        setEmployees([
            ...employees,
            employee
        ])
    }

    const removeEmployeeCb = (id)=>{
        const idx = employees.findIndex(employee=>employee.id===id)
        setEmployees([
            ...employees.slice(0, idx),
            ...employees.slice(idx + 1)
        ])
    }

    console.log(employees)

    return(
        <div className={`employees`}>
            {error && `Error: ${error}`}
            {isLoading && 'Loading data...'}
            {employees && employees.map(({id, employee_name, employee_age, employee_salary})=>{
                return <Employee 
                    key={id}
                    id={id}
                    name={employee_name}
                    removeEmployeeCb={removeEmployeeCb}
                />
            })}
            <button onClick={addEmployee}>Add Employee</button>
            {openAddEmployeePanel && <AddEmployeePanel 
                id={employees && Number(employees[employees.length-1].id)+1}
                addEmployeeCb={addEmployeeCb}
            />}
        </div>
    )
}

export default Employees