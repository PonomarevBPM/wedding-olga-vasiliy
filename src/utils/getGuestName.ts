const guests = new Map([
  ['IrinaAndAlex', 'Дорогие Ира и Саша'],
  ['SlavaAndLena', 'Дорогие Слава и Лена'],
  ['Darina', 'Дорогая Дарина'],
  ['PolinaAndAndrey', 'Дорогие Полина и Андрей'],
  ['AnyaAndArtem', 'Дорогие Аня и Артём'],
  ['Vika', 'Дорогая Вика'],
  ['Babushka', 'Дорогая Бабушка'],
  ['DanyaAndLiza', 'Дорогие Даня и Лиза'],
  ['DanyaAndNastya', 'Дорогие Даня и Настя'],
  ['ArtemAndNastya', 'Дорогие Артем и Настя'],
]);

export const getGuestName = (guest: string | undefined): string | undefined => {
  if (guest) {
    return guests.get(guest);
  }
};
