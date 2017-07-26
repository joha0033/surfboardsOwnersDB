
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('surfboard_owners').del()
    .then(function () {
      // Inserts seed entries
      return knex('surfboard_owners').insert([
        {
          id: 1,
          first_name: 'Austin',
          last_name: 'Johnston',
          email: 'aj@gmail.com',
          password: 'surfboardsaj'
        },
        {
          id: 2,
          first_name: 'JP',
          last_name: 'Salvat',
          email: 'jp@gmail.com',
          password: 'surfboardsjp'
        },
        {
          id: 3,
          first_name: 'Ryan',
          last_name: 'Barber',
          email: 'rb@gmail.com',
          password: 'surfboardrb'
        }
      ]);
    });
};
