const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data'); // desestrutura.
// Contabilize a quantidade de espécies de animais residentes no zoológico
function countAnimals(animal) {
  if (animal === undefined) {
    const allAnimals = species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length; // acc[specie.name] irá roda dentro do specie.name de um a um para passar o nome do animal, começando com {}.
      return acc;
    }, {});
    return allAnimals;
  } if (!animal.sex) {
    const findAnimal = species.find((animals) => animals.name === animal.specie);
    return findAnimal.residents.length;
  }
  const findAnimalSex = species.find((animals) => animals.name === animal.specie)
    .residents.filter((animalSex) => animalSex.sex === animal.sex).length;
  return findAnimalSex;
}
module.exports = countAnimals;
// { specie: 'giraffes', sex: 'female' } specie e sex estão como para e entram na condição da li9nha 12, 15 e 16 respectivamente.
