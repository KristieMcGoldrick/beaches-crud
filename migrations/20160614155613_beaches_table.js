exports.up = function(knex, Promise) {
  // create the table
  return knex.schema.createTable('beaches', function(table){
    table.increments();
    table.string('name');
    table.string('image');
    table.string('location');
    table.text('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('beaches');
};
