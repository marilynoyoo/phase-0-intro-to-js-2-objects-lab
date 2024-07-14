const employee = {
    name:"John",
    streetadress: "12 Main St."
}
updateEmployeeWithKeyAndValue(employee, "car model", "Camry")

function updateEmployeeWithKeyAndValue(obj, key, value) {
    let employees = {...employee}
    employees[key] = value
    return employees
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}


function deleteFromEmployeeByKey(employee, key) {
    return {
        employee
    }
}
//function destructivelyDeleteFromEmployeeByKey(employee){

   //return {
    //employee
   //}

//}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee

}




