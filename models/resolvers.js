function updateData(originalObj, updateInfo) {
  for (const [key, value] of Object.entries(updateInfo)) {
    originalObj[key] = value;
  }
  return originalObj;
}

module.exports = (knex) => {
  return {
    /*
    QUERY METHODS
    */
    Logs: () => knex("logs").select(),
    ServerLogs: (req) =>
      knex("logs")
        .where(`server`, `like`, `%${req.server}%`)
        .select(),
    Characters: () => knex("players").select(),
    CharactersByType: (req) =>
      knex("players")
        .where(`type`, `=`, `${req.type}`)
        .select(),
    Character: (req) => {
      let param;
      if (req.character_id) {
        param = "character_id";
      } else if (req.character_name) {
        param = "character_name";
      }
      const searchParam = req[param];
      return knex("players")
        .where(`${param}`, `like`, `%${searchParam}%`)
        .select()
        .then((char) => char.pop());
    },

    /*
    MUTATION METHODS
    */

    //methods for Log manipulation
    AddLog: (input) =>
      knex("logs")
        .insert(input.info)
        .then(() => {
          return knex("logs")
            .where(`log_nr`, `=`, `${input.info.log_nr}`)
            .select();
        })
        .then((value) => value.pop()),
    EditLog: (input) =>
      knex("logs")
        .where(`log_nr`, `=`, `${input.log_nr}`)
        .select()
        .then((log) => updateData(log.pop(), input.info)),
    RemoveLog: (input) =>
      knex("logs")
        .where(`log_nr`, `=`, `${input.log_nr}`)
        .del()
        .then((res) => `Deleted ${res} row('s)`),

    //methods to deal with character mutations
    AddCharacter: (input) =>
      knex("players")
        .insert(input.info)
        .then(() => {
          return knex("players")
            .where(`character_id`, `=`, `${input.info.character_id}`)
            .select();
        })
        .then((value) => value.pop()),
    EditCharacter: (input) =>
      knex("players")
        .where(`character_id`, `like`, `%${input.character_id}%`)
        .orWhere(`character_name`, `like`, `%${input.character_name}%`)
        .select()
        .then((character) => updateData(character.pop(), input.info)),
    RemoveCharacter: (input) =>
      knex("players")
        .where(`log_nr`, `=`, `${input.log_nr}`)
        .del()
        .then((res) => `Deleted ${res} row('s)`),
  };
};
