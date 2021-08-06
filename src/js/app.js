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

  expect(sortPlayerList(data)).toEqual(expected);
  expect(sortPlayerList(data)).not.toBe(expected);
});