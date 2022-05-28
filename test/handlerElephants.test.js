const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna contagem de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Retorna os nomes dos elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('Retorna null se o parâmetro for inválido', () => {
    expect(handlerElephants('')).toBeNull();
  });

  it('Retorna undefined se nenhum parâmetro for passado', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Retorna um erro se o parâmetro não for do tipo string', () => {
    expect(handlerElephants(42)).toBe('Parâmetro inválido, é necessário uma string');
  });
});
