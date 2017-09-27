'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products',
      [
        {
          name: 'product1',
          description: 'description',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
            name: 'product2',
            description: 'description',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'product3',
            description: 'description',
            createdAt: new Date(),
            updatedAt: new Date()
        }
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {})
  }
}
