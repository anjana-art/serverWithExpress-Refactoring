const express = require("express");
const app = express();
const fs = require("fs");
const {createPlayer} = require('./modules/createPlayer.js');
const {getPlayerById} = require('./modules/getPlayerById.js');
const { updatePlayer } = require("./modules/updatePlayer.js");
const { deletePlayer } = require("./modules/deletePlayer.js");
const {getAllPlayers} = require('./modules/getAllPlayers.js');
//const {playerRouter} = require('./playerRouter.js');


PORT = 5005;
app.use(express.json());
const playerRouter = express.Router();
app.use(playerRouter);

const getPlayersData = (res, req, next) =>{
    players = JSON.parse(fs.readFileSync("./players.json", 'utf-8'));
    next();
}
//Optional
//const getPlayersData = (res, req, next)=>{
  //  const players = await readFileData();
  //req.players;
  //next();
//}



playerRouter.get("/api/v1/players", getPlayersData, getAllPlayers)

playerRouter.post("/api/v1/players", getPlayersData, createPlayer)

playerRouter.get("/api/v1/players/:id", getPlayersData,getPlayerById )

playerRouter.patch("/api/v1/players/:id", getPlayersData,updatePlayer)

playerRouter.delete("/api/v1/players/:id" , getPlayersData,deletePlayer)

app.listen(PORT, () => {
    console.log(`server is running in PORT ${PORT}`);
})

module.exports = {
    playerRouter
}