const data = require('../data/zoo_data');
const { species } = data;
const { hours } = data;
const schedule = {
  Tuesday: {
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: species.filter((a) => a.availability.some((b) => b === 'Tuesday'))
      .map((a) => a.name),
  },
  Wednesday: {
    officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: species.filter((a) => a.availability.some((b) => b === 'Wednesday'))
      .map((a) => a.name),
  },
  Thursday: {
    officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: species.filter((a) => a.availability.some((b) => b === 'Thursday'))
      .map((a) => a.name),
  },
  Friday: {
    officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: species.filter((a) => a.availability.some((b) => b === 'Friday'))
      .map((a) => a.name),
  },
  Saturday: {
    officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: species.filter((a) => a.availability.some((b) => b === 'Saturday'))
      .map((a) => a.name),
  },
  Sunday: {
    officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: species.filter((a) => a.availability.some((b) => b === 'Sunday'))
      .map((a) => a.name),
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

// Crie um cronograma com os horários de visita disponíveis para cada espécie de animal.

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return schedule;
  }
  if (species.map((animal) => animal.name).includes(scheduleTarget)) {
    const findAnimalSchedule = species.find((specie) => specie.name === scheduleTarget);
    return findAnimalSchedule.availability;
  }
  if (Object.keys(hours).includes(scheduleTarget)) {
    return {
      [scheduleTarget]:
        schedule[scheduleTarget],
    };
  } return schedule;
}

module.exports = getSchedule;
console.log(getSchedule('giraffes'));
