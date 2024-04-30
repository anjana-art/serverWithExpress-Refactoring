const fs = require("fs");
let getPlayerById = (req, res)=>{
     //get player by id
   //  let players = JSON.parse(fs.readFileSync("./players.json", "utf-8"));

     const id = req.params.id;
     const player = players.find(el => el.id === id);
     if(player === undefined){
         return res.status(404).json({
             status:'fail',
             message: "id not exist"
         })
     }
     res.status(200).json({
         status: 'success', 
         data: player
     })
}
module.exports={getPlayerById}