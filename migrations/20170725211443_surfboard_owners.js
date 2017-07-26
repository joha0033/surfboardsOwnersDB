
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('surfboard_owners', function(table){
      table.increments('id').primary()
      table.string('first_name').notNull()
      table.string('last_name').notNull()
      table.string('email').notNull()
      table.string('password').notNull()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('surfboard_owners')
};
