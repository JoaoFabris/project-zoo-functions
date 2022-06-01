const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('retorna uma mensagem informando se o zoológico está aberto ou não naquela data e hora.', () => {
    expect(getOpeningHours()).toEqual({ Tuesday: { open: 8, close: 6 }, Wednesday: { open: 8, close: 6 }, Thursday: { open: 10, close: 8 }, Friday: { open: 10, close: 8 }, Saturday: { open: 8, close: 10 }, Sunday: { open: 8, close: 8 }, Monday: { open: 0, close: 0 } });
  });
  it('Verifica se o parque esta fechado ao receber um dia e um horário', () => {
    expect(getOpeningHours('Monday', '09-00-AM')).toBe('The zoo is closed');
  });
  it('Verifica se o parque esta aberto ao receber um dia e um horário', () => {
    expect(getOpeningHours('Tuesday', '09-00-PM')).toBe('The zoo is open');
  });
  it('Verifica se o parque esta fechado ao receber um dia e um horário', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Receber "The zoo is open" ao passar um dia e horário em que o zoológico abre', () => {
    expect(getOpeningHours('Sunday', '09:00-AM')).toBe('The zoo is open');
  });
  it('erro ao passar um horário com abreviação errada', () => {
    expect(getOpeningHours('Monday', '12:00-LM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Receber erro ao passar um horário com os minutos inválidos', () => {
    expect(getOpeningHours('Monday', '12:60-PM')).toThrow('minutes must be between 0 and 59');
  });
  it('Receber erro ao passar um horário com a hora inválida', () => {
    expect(getOpeningHours('Friday', '13:00-PM')).toThrow('hours must be between 0 and 12');
  });
});
