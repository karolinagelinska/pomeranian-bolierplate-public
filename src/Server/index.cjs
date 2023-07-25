const { faker } = require('@faker-js/faker');

const generator = () => {
  const generateUsers = () => {
    return {
      name: faker.person.firstName(),
      surname: faker.person.lastName(),
      id: faker.database.mongodbObjectId(),
      email: faker.internet.email(),
      phone: faker.phone.number('+48 #########'),
    };
  };
};
let data = Array(100)
  .fill({})
  .map((obj) => generateUsers());

return data;
