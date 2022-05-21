const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data'); // desestrutura.
// Busque as espécies dos animais por meio de um id e retorne um array contendo todos os animais dessa espécie.
function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id));
}

module.exports = getSpeciesByIds;
