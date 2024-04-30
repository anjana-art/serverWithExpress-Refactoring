const express = require("express");
const fs = require('fs');
const playerRouter = express.Router();

const { createPlayer } = require('./modules/createPlayer.js');
const { getPlayerById } = require('./modules/getPlayerById.js');
const { updatePlayer } = require("./modules/updatePlayer.js");
const { deletePlayer } = require("./modules/deletePlayer.js");
const { getAllPlayers } = require('./modules/getAllPlayers.js');

const readFileData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile("./players.json", 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }

            return resolve(data);
        });
    });
}

const getPlayersData = async (req, res, next) => {
    const players = await readFileData();
    req.players = players;
    console.log("req.players", req.players);
    next();
}

playerRouter.get("", getPlayersData, getAllPlayers);
playerRouter.post("/api/v1/players", getPlayersData, createPlayer);
playerRouter.get("/api/v1/players/:id", getPlayersData, getPlayerById);
playerRouter.patch("/api/v1/players/:id", getPlayersData, updatePlayer);
playerRouter.delete("/api/v1/players/:id", getPlayersData, deletePlayer);

module.exports = {
    playerRouter
}