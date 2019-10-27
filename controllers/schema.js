const queries = `
  type Log {
    id: Int
    server: String
    log_nr: String!
    date_added: String
  }
  type Character {
    id: Int
    player_nr: Int
    type: String
    character_name: String
    character_id: String
    player_identifier: String
    level: Int
    cp_rank: Int
    added_to_group: Boolean
    time_from_log_Start: String
  }
  type Query {
    Logs: [Log]
    ServerLogs(server: String): [Log]
    Characters: [Character]
    CharactersByType(type: String): [Character]
    Character(character_name: String character_id: String): Character
  }
  `;
const mutations = `
  input inputLogs {
    log_nr: String!
    server: String!
  }
  input inputCharacters {
    characterName: String!
    characterId: String!
  }
  type Mutation {
    AddLog(info: inputLogs): Log
  },`;

const schemaString = queries.concat(mutations);
module.exports = schemaString;