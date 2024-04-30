const express = require("express");
const app = express();
const fs = require("fs");
const {createPlayer} = require('./modules/createPlayer.js');
const {getPlayerById} = require('./modules/getPlayerById.js');
const { updatePlayer } = require("./modules/updatePlayer.js");
const { deletePlayer } = require("./modules/deletePlayer.js");
const {getAllPlayers} = require('./modules/getAllPlayers.js');


PORT = 5005;
app.use(express.json());
//app.use('/assets',express.static(__dirname + '/public'));
let players = JSON.parse(fs.readFileSync("./players.json", 'utf-8'));

app.get("/api/v1/players", getAllPlayers)

app.post("/api/v1/players", createPlayer)

app.get("/api/v1/players/:id",getPlayerById )

app.patch("/api/v1/players/:id",updatePlayer)

app.delete("/api/v1/players/:id" ,deletePlayer)

app.listen(PORT, () => {
    console.log(`server is running in PORT ${PORT}`);
})
