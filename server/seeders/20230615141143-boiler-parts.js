const { faker } = require('@faker-js/faker');
('use strict');

const boilerManufactures = [
  'Ariston',
  'Chaffoteaux&Maury',
  'Baxi',
  'Bongioanni',
  'Saunier Duval',
  'Buderus',
  'Chaffoteaux&Maury',
  'Baxi',
  'Buderus',
  'Chaffoteaux&Maury',
];

const partsManufactures = [
  'asd',
  'dsa&Maury',
  'agade',
  'ag',
  'adh ahdf',
  'Budahfjterus',
  'jd&Maury',
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const list = [];
    for (let i = 1; i < 100; i++) {
      list.push({
        boiler_manufacturer:
          boilerManufactures[
            Math.floor(Math.random() * boilerManufactures.length)
          ],
        parts_manufacturer:
          partsManufactures[
            Math.floor(Math.random() * partsManufactures.length)
          ],
        price: faker.string.numeric(4),
        name: faker.lorem.sentence(2),
        description: faker.lorem.sentence(10),
        images: JSON.stringify(
          [...Array(3)].map(
            () => `${faker.image.url()}?random=${faker.string.numeric(20)}`,
          ),
        ),
        vendor_code: faker.internet.password(),
        in_stock: faker.string.numeric(1),
        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),
        popularity: faker.string.numeric(3),
        compatibility: faker.lorem.sentence(7),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    return queryInterface.bulkInsert('BoilerParts', list);

    // return queryInterface.bulkInsert('BoilerParts', [
    //   ...Array(100).map(() => ({
    //     boiler_manufacturer:
    //       boilerManufactures[
    //         Math.floor(Math.random() * boilerManufactures.length)
    //       ],
    //     parts_manufacturer:
    //       partsManufactures[
    //         Math.floor(Math.random() * partsManufactures.length)
    //       ],
    //     price: faker.string.numeric(4),
    //     name: faker.lorem.sentence(2),
    //     description: faker.lorem.sentence(10),
    //     images: JSON.stringify(
    //       [...Array(7)].map(
    //         () => `${faker.image.url()}?random=${faker.string.numeric(30)}`,
    //       ),
    //     ),
    //     vendor_code: faker.internet.password(),
    //     in_stock: faker.string.numeric(1),
    //     bestseller: faker.datatype.boolean(),
    //     new: faker.datatype.boolean(),
    //     popularity: faker.string.numeric(3),
    //     compatibility: faker.lorem.sentence(7),
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   })),
    // ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('BoilerParts', null, {});
  },
};
