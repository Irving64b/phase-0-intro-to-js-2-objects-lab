// Write your solution in this file!
const employee = {
    name: "Someone",
    streeAdress: "23 Lives Here",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee, "name": "Sam", "streetAddress": "11 Broadway"}
    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee[key]}
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}