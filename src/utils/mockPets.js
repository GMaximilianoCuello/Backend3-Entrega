import { faker } from '@faker-js/faker';

export const generateMockPets = (countPets = 25) => {
  let pets = [];

  for (let i = 0; i < countPets; i++) {
    pets.push({
      name: faker.animal.petName(),
      age: faker.number.int({ min: 1, max: 15 }),
      specie: faker.animal.type(),
      owner: null,
      adopted: false
    });
  }

  return pets;
};
