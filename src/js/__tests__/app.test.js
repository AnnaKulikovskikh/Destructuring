import specialSkills from '../app';

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

test('have descriotion', () => {
  const result = specialSkills(character)[0].description;
  expect(result).toEqual('Двойной выстрел наносит двойной урон');
});

test('secret descriotion', () => {
  const result = specialSkills(character)[1].description;
  expect(result).toEqual('Описание недоступно');
});

test.each([
  [0],
  [1],
])('check length', (i) => {
  const result = specialSkills(character);
  expect(Object.keys(result[i]).length).toBe(4);
});
