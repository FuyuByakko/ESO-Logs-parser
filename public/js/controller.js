document.getElementById("getLogs").addEventListener("click", () => {
  console.log("clicked getLogs");
  fetch("./graphql", {
    method: "POST",
    headers: { "Content-Type": "application/graphql" },
    body: `{Logs {log_nr}}`,
  }).then((res) => showData(res.json()));
});
document.getElementById("getChar").addEventListener("click", () => {
  console.log("clicked getChars");
  fetch("./graphql", {
    method: "POST",
    headers: { "Content-Type": "application/graphql" },
    body: `{Character(character_id: "@SalvagE"){
      character_id, character_name, level
    }}`,
  }).then((res) => showData(res.json()));
});
document.getElementById("addLog").addEventListener("click", () => {
  console.log("clicked addLog");
  fetch("./graphql", {
    method: "POST",
    headers: { "Content-Type": "application/graphql" },
    body: `mutation{AddLog(info:{log_nr:"251890"  server:"Japan"}) {log_nr, server}}`,
  }).then((res) => showData(res.json()));
});
document.getElementById("deleteLog").addEventListener("click", () => {
  console.log("clicked deleteLog");
  fetch("./graphql", {
    method: "POST",
    headers: { "Content-Type": "application/graphql" },
    body: `mutation{RemoveLog(log_nr:"251890")}`,
  }).then((res) => showData(res.json()));
});
