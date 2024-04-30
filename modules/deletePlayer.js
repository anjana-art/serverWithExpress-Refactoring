let deletePlayer =(req, res) =>{
    //delete player by id
    const id = req.params.id
    const player = players.find(el => el.id === id);
    if(player === undefined){
        return res.status(404).json({
            status:'fail',
            message: "id not exist"
        })
    }
    var index = players.findIndex(obj => obj.id == id);
    players.splice(index, 1)

    fs.writeFile("./players.json",JSON.stringify(players), err=>{
        res.status(200).json(
            {
                status:"success delete",
                data: player
            })
    });
}
module.exports = {
    deletePlayer
}