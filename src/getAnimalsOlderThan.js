const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data'); // desestrutura.
// Ao receber uma espécie e uma idade como parâmetro, retorne se todos os animais dessa espécie possuem essa idade ou são mais velhos.
function getAnimalsOlderThan(animal, age) {
  const animals = species.find((specie) => (specie.name === animal)).residents;
  return animals.every((ani) => ani.age > age);
}

module.exports = getAnimalsOlderThan;
