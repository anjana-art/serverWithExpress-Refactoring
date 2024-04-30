const fs = require("fs");

let createPlayer = (req, res) => {
  //create a new player
 // let players = JSON.parse(fs.readFileSync("./players.json", "utf-8"));

  const id = players[players.length - 1].id + 1; // create id of next player
  const newPlayer = Object.assign({ id: id }, req.body);
  //  newPlayer = req.body;
  console.log(newPlayer);
  players.push(newPlayer);
  fs.writeFile("./players.json", JSON.stringify(players), (err) => {
    res.status(201).json({
      status: "success",
      data: players,
    });
  });
};

module.exports = {
  createPlayer
};
