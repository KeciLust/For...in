import orderByProps from '../app';

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

test('comparison obj', () => {
  expect(orderByProps(obj, ['name', 'level'])).toEqual(["key: 'name', value: 'мечник'", "key: 'level', value: '2'", "key: 'attack', value: '80'", "key: 'defence', value: '40'", "key: 'health', value: '10'"]);
});
test('comparison obj 2', () => {
  expect(orderByProps(obj, ['name', 'level'])).not.toBe(["key: 'name', value: 'мечник'", "key: 'level', value: '2'", "key: 'attack', value: '80'", "key: 'defence', value: '40'", "key: 'health', value: '10'"]);
});
