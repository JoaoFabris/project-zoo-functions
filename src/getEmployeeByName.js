const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data'); // desestrutura.
// Busque as pessoas colaboradoras pelo primeiro ou último nome delas.
function getEmployeeByName(employeeName) {
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName)
    || {};
}

module.exports = getEmployeeByName;
