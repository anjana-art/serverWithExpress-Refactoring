let getAllPlayers= (req, res)=>{
       res.status(200).json(
         {
             status: "success",
             data: players
         }
        )
     }

module.exports = {getAllPlayers};