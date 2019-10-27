/* eslint-disable no-case-declarations */
const config = require("./../config");
const knex = require("knex")(config.db);

const fs = require("fs");
fs.readFile("src_file/Encounter.log", "utf-8", parseFile);

//SETUP Data collectors for parser
const allData = {};
allData.logs = [];
allData.players = [];

//DEFINE PARSER FUNCTION
function parseFile(err, data) {
  if (err) {
    throw Error(err);
  }
  const entries = data.split("\r\n").map((entry) => entry.split(","));
  entries.forEach((entry) => {
    switch (entry[1]) {
      case "BEGIN_LOG":
        let [_time, _command, log_nr, _, server, _language, _version] = entry;
        const logsObj = { log_nr, server: server.slice(1, -1) };
        allData.logs.push(logsObj);
        break;
      case "UNIT_ADDED":
        // case 'UNIT_REMOVED':
        let [
          action_at,
          _c,
          player_nr,
          type,
          _user,
          _partynr,
          _1,
          _2,
          _3,
          _4,
          char_name,
          char_id,
          player_identifier,
          level,
          cp_rank,
        ] = entry;
        const added = _c === "UNIT_ADDED";
        // eslint-disable-next-line no-case-declarations
        const playerObj = {
          player_nr,
          type,
          character_name: char_name.slice(1, -1),
          character_id: char_id.slice(1, -1),
          player_identifier: String(player_identifier),
          level,
          cp_rank,
          added,
          action_at: String(action_at),
        };
        allData.players.push(playerObj);
        break;
    }
  });
  //SEED the DB
  seedDB(allData);
}

//DEFINE SEED DB function
function seedDB(data) {
  for (const key of Object.keys(data)) {
    console.log(key);
    switch (key) {
      case "logs":
        knex("logs")
          .insert(data.logs)
          .then(() => {
            console.log("Added logs");
          });
        break;
      case "players":
        knex("players")
          .insert(data.players)
          .then(() => {
            console.log("Added players");
          });
    }
  }
}
