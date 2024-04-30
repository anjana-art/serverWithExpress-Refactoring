const {playerRouter} = require("./serverRefac")


    
playerRouter.get("/api/v1/players", getPlayersData, getAllPlayers)

playerRouter.post("/api/v1/players", getPlayersData, createPlayer)

playerRouter.get("/api/v1/players/:id", getPlayersData,getPlayerById )

playerRouter.patch("/api/v1/players/:id", getPlayersData,updatePlayer)

playerRouter.delete("/api/v1/players/:id" , getPlayersData,deletePlayer)


