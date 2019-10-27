/*
Add an element to the DB for each file read (1 full log);

For future update add a refference to a specific log and handle multiple at the same time
// t.bigInteger('log_nr').references('logs.log_nr');

*/

exports.up = function(knex, Promise) {
  // create the 'logs' table with three columns
  return knex.schema.createTable("players", (t) => {
    t.increments().index();
    t.integer("player_nr", 30)
      .notNullable()
      .index();
    t.string("type", 15).notNullable();
    t.string("character_name", 30)
      .notNullable()
      .index();
    t.string("character_id", 30)
      .notNullable()
      .index();
    t.string("player_identifier", 30)
      .notNullable()
      .index();
    t.integer("level").notNullable();
    t.integer("cp_rank").notNullable();
    t.boolean("added").notNullable();
    t.string("action_at", 30).notNullable(); // default to the current time
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("players");
};
