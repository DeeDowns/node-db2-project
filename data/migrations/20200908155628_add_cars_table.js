
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      table.increments()

      table.string('VIN', 17).unique().notNullable().index()

      table.string('Make').notNullable().index()

      table.string('Model').notNullable().index()

      table.integer('Mileage').notNullable()

      table.string('Transmission Type').index()

      table.string('Title Status').index()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
