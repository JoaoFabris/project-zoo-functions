const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data'); // desestrutura.
// Verifique se uma pessoa colaboradora é gerente e quais pessoas ela lidera.
function isManager(id) {
  const IsManagerId = employees.some((employee) => employee.managers.includes(id));
  return IsManagerId;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const managerResponsibleFor = employees.filter((employee) =>
    employee.managers.includes(managerId));
  const employeeForManager = managerResponsibleFor.map((employee) =>
    `${employee.firstName} ${employee.lastName}`);
  return employeeForManager;
}

module.exports = { isManager, getRelatedEmployees };
