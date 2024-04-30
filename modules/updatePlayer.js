let updatePlayer =(req, res)=>{
      //updated player by id
      const id = req.params.id
      const player = players.find(el => el.id === id);
      if(player === undefined){
          return res.status(404).json({
              status:'fail',
              message: "id not exist"
          })
      }
  
      players[id].firstName = req.body.firstName
      player.lastName = req.body.lastName
      player.age = req.body.age
      player.team = req.body.team
      players[id]= player
      
      fs.writeFile("./players.json",JSON.stringify(players), err=>{
          res.status(200).json(
              {
                  status:"success",
                  data: players[id]
              })
      });     
}

module.exports = {
    updatePlayer
}