const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findEmployee = employees.find((employee) => employee.id === id);
  const findFirstSpecie = findEmployee.responsibleFor[0];
  const getAnimal = species.find((animal) => animal.id === findFirstSpecie).residents;
  const findOldestAnimal = getAnimal.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return Object.values(findOldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
