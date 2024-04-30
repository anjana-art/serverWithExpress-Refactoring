const fs = require("fs");
let getAllPlayers= (req, res)=>{
 // let players = JSON.parse(fs.readFileSync("./players.json", "utf-8"));
      console.log("getAllPlayers", req.players);

       res.status(200).json(
         {
             status: "success",
             data: req.players
         }
        )
     }

module.exports = {getAllPlayers};