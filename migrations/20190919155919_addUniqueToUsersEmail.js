
exports.up = function (knex, Promise) {
  return knex.schema.alterTable('users', function (t) {
    t.string('email').unique().notNullable().alter()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.alterTable('users', function (t) {
    t.dropColumn('email')
  })
}
