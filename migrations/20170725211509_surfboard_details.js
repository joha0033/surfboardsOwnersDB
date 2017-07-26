
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('surfboard_details', function(table){
      table.increments('id').primary()
      table.string('make').nullable()
      table.string('model').nullable()
      table.string('length').notNullable()
      table.integer('owner_id').unsigned()
      table.foreign('owner_id').references('surfboard_owners.id')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('surfboard_details')
};
