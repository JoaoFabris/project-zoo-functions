const data = require('../data/zoo_data');

const { employees, species } = data;

const findSpecies = ({ responsibleFor }) => responsibleFor
  .map((specie) => species.find(({ id }) => id === specie).name);

const findLocation = (arr) =>
  arr.map((a) => species.find(({ name }) => name === a).location);

const getEmployeeData = (dataEmployee) => {
  const { firstName, lastName, id } = dataEmployee;
  return ({
    id,
    fullName: `${firstName} ${lastName}`,
    species: findSpecies(dataEmployee),
    locations: findLocation(findSpecies(dataEmployee)),
  });
};

const allData = () => employees.map((a) => getEmployeeData(a));

const checkData = (EmployeeData) => {
  const value = Object.values(EmployeeData);
  const dataEmployee = employees
    .find(({ firstName, lastName, id }) => value.includes(firstName) || value
      .includes(lastName) || value.includes(id));
  if (dataEmployee === undefined) throw new Error('Informações inválidas');
  return getEmployeeData(dataEmployee);
};

function getEmployeesCoverage(EmployeeData) {
  return (!EmployeeData) ? allData() : checkData(EmployeeData);
}

module.exports = getEmployeesCoverage;
