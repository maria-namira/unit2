import sortPlayerList from '../js/app';

test('Checking the correctness of sorting', () => {
  const data = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

 const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
expect(sortPlayerList(data)).not.toBe(expected); 
});
test('sort to Equal success,' () => {
  const data = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

 const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(sortPlayerList(data)).toEqual(expected);
});


export default function showHealth(units) {
  let result;
  if (units.health > 50) {
    result = 'healthy';
  }
  if (units.health <= 50 && units.health > 15) {
    result = 'wounded';
  }
  if (units.health <= 15 && units.health > 0) {
    result = 'critical';
  }
  if (Number.isNaN(units.health) || units.health === undefined || units.health < 0 || typeof (units.health) !== 'number') {
    throw new Error('Parameter is not a number!');
  }
  return result;
}