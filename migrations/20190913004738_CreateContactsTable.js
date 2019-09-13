
exports.up = function(knex) {
  return knex.schema.hasTable('contacts')
    .then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('contacts', function (t) {
          t.increments('id')
          t.bigInteger('user_id')
          t.string('first_name')
          t.string('last_name')
          t.string('phone_number')
          t.string('email')
          t.timestamps(true, true)
        })
      }
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('contacts')
};
