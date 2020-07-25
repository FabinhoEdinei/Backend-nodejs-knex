exports.up = function(knex) {
  knex.schema.createTable("container", function(table) {
    table.string("id").primary();
    table.string("name").notNullable();
  });
};

exports.down = function(knex) {
  knex.schema.dropTable("container");
};
