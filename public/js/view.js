// const app = angular.module("myApp", []);
const curState = {};

const statusChange = (change) => {
  const statusBar = document.getElementById("status");
  statusBar.innerText = change.message || "LOAD_DB";
};
const infoPanel = document.getElementById("infoPanel");

const updateStatus = (change) => {
  switch (change.type) {
    case "CHANGE_STATUS":
      console.log("ok");
      statusChange(change);
      break;
  }
};

updateStatus({ type: "CHANGE_STATUS" });

// module.exports = { updateStatus };