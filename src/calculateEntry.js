const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;

  entrants.forEach((entrant) => {
    if (entrant.age >= 50) senior += 1;
    else if (entrant.age >= 18 && entrant.age < 50) adult += 1;
    else child += 1;
  });
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  let total = 0;
  // Traz de volta as var dentro da outra função, as definindo.
  if (!entrants || Object.keys(entrants).length === 0) return 0; // !entrants = false, para vaizo.
  const { child, adult, senior } = countEntrants(entrants);
  total += (prices.adult * adult) + (prices.child * child) + (prices.senior * senior);
  return total;
}

module.exports = { calculateEntry, countEntrants };
