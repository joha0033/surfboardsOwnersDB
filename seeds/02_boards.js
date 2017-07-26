
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('surfboard_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('surfboard_details').insert([
        {
          make: 'Robert August',
          model: 'What I Ride',
          length: '9\'2',
          owner_id: '1'
        },
        {
          make: 'Whisnat',
          model: 'unknown',
          length: '9\'2',
          owner_id: '1'
        },
        {
          make: 'Black Rose',
          model: 'Deviated Septum',
          length: '9\'10',
          owner_id: '1'
        },
        {
          make: 'Walden',
          model: 'Magic',
          length: '8\'10',
          owner_id: '2'
        },
        {
          make: 'Stuart',
          model: 'Slow FLow',
          length: '9\'6',
          owner_id: '2'
        },
        {
          make: 'Black Rose',
          model: 'Fine Swine',
          length: '9\'16',
          owner_id: '2'
        },
        {
          make: 'Cannibal',
          model: 'Rocket Fisj',
          length: '7\'10',
          owner_id: '3'
        },
        {
          make: 'Al Merick',
          model: 'Big Wave',
          length: '7\'6',
          owner_id: '3'
        }
      ]);
    });
};
