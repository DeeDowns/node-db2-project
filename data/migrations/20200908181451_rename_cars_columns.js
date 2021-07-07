
exports.up = function(knex) {
  return knex.schema.table('cars', table => {
      table.renameColumn('VIN', 'vin')
      table.renameColumn('Make', 'make')
      table.renameColumn('Model', 'model')
      table.renameColumn('Mileage', 'mileage')
      table.renameColumn('Transmission Type', 'transmission_type')
      table.renameColumn('Title Status', 'title_status')
  })
};

exports.down = function(knex) {
  return knex.schema.table('car', table => {
      table.dropColumn('vin')
      table.dropColumn('make')
      table.dropColumn('model')
      table.dropColumn('mileage')
      table.dropColumn('transmission_type')
      table.dropColumn('title_status')
  })
};
