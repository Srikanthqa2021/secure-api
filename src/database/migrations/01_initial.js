exports.up = function(knex) {
  return knex.schema
      .createTable('knex_migrations', (table) => {
        table.increments('id');
        table.string('name', 255).notNullable();
        table.string('batch', 255).notNullable();
		table.string('migration_time',1200).notNullable();
      });
};

exports.down = function(knex) {
  return knex.schema
      .dropTable('knex_migrations');
};
