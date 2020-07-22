import React, {useRef} from 'react'

const AddEmployeePanel = ({id, addEmployeeCb})=>{
    const nameRef = useRef(null)
    const salaryRef = useRef(null)
    const ageRef = useRef(null)

    const addEmployee = ()=> {
        addEmployeeCb({
            id,
            employee_name: nameRef.current.value,
            employee_salary: salaryRef.current.value,
            employee_age: ageRef.current.value
        }
    )}

    return(
        <div className={`add-employee-panel`}>
            <div><input type='text' ref={nameRef}/> Name</div>
            <div><input type='text' ref={salaryRef}/> Salary</div>
            <div><input type='text' ref={ageRef}/> Age</div>
            <div><button onClick={addEmployee}>Add Employee</button></div>
        </div>
    )
}

export default AddEmployeePanel