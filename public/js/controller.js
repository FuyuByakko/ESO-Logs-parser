document.getElementById("getLogs").addEventListener("click", () => {
  console.log("clicked getLogs");
  fetch("./graphql", {
    method: "POST",
    headers: { "Content-Type": "application/graphql" },
    body: "{Logs {log_nr}}",
  }).then((res) => console.log(res.json()));
});
document.getElementById("getChars").addEventListener("click", () => {
  console.log("clicked getChars");
  fetch("./graphql", {
    method: "POST",
    headers: { "Content-Type": "application/graphql" },
    body: "{Logs {log_nr}}",
  }).then((res) => console.log(res.json()));
});
document.getElementById("addLog").addEventListener("click", () => {
  console.log("clicked addLog");
  fetch("./graphql", {
    method: "POST",
    headers: { "Content-Type": "application/graphql" },
    body: "{Logs {log_nr}}",
  }).then((res) => console.log(res.json()));
});
document.getElementById("deleteLog").addEventListener("click", () => {
  console.log("clicked deleteLog");
  fetch("./graphql", {
    method: "POST",
    headers: { "Content-Type": "application/graphql" },
    body: "{Logs {log_nr}}",
  }).then((res) => console.log(res.json()));
});
