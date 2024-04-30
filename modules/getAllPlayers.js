const fs = require("fs");
let getAllPlayers= (req, res)=>{
 // let players = JSON.parse(fs.readFileSync("./players.json", "utf-8"));

       res.status(200).json(
         {
             status: "success",
             data: players
         }
        )
     }

module.exports = {getAllPlayers};