import Team from '../app';

test('add', () => {
  const team = new Team();
  team.add('Elf');
  team.add('Dwarf');
  expect([...team.members]).toEqual(['Elf', 'Dwarf']);
});

test('toArray', () => {
  const team = new Team();
  team.add('Elf');
  team.add('Dwarf');
  expect(team.toArray()).toEqual(['Elf', 'Dwarf']);
});

test('addAll', () => {
  const team = new Team();
  team.addAll('Elf', 'Dwarf', 'Man');
  expect(team.toArray()).toEqual(['Elf', 'Dwarf', 'Man']);
});

test('Error', () => {
  const team = new Team();
  team.add('Elf');
  team.add('Dwarf');
  expect(() => { team.add('Elf'); }).toThrowError('Персонаж уже в команде!');
});
