/*
Add an element to the DB for each file read (1 full log);
*/

exports.up = function(knex, Promise) {
  // create the 'logs' table with three columns
  return knex.schema.createTable("logs", (t) => {
    t.increments().index();
    t.string("server", 20)
      .notNullable()
      .index();
    t.string("log_nr", 30)
      .unique()
      .notNullable()
      .index();
    t.timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now()); // default to the current time
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("logs");
};
