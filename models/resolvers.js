module.exports = (knex) => {
  return {
    Logs: async () => await knex("logs").select(),
    ServerLogs: async (req) =>
      await knex("logs")
        .where(`server`, `like`, `%${req.server}%`)
        .select(),
    Characters: async () => await knex("players").select(),
    CharactersByType: async (req) =>
      await knex("players")
        .where(`type`, `=`, `${req.type}`)
        .select(),
    Character: async (req) => {
      if (req.character_id)
        return await knex("players")
          .where(`character_id`, `like`, `${req.character_id}`)
          .select();
      if (req.character_name)
        return await knex("players")
          .where(`character_name`, `like`, `${req.character_name}`)
          .select();
    },
  };
};
