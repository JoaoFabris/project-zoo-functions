const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data'); // desestrutura.
// Busque as espécies dos animais por meio de um id e retorne um array contendo todos os animais dessa espécie.
function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id));
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
module.exports = getSpeciesByIds;
