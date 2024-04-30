const express = require("express");
const app = express();
const fs = require("fs");
const { playerRouter } = require('./playerRouter.js');

const PORT = 5005;
app.use(express.json());

app.use("/api/v1/players", playerRouter);

app.listen(PORT, () => {
    console.log(`server is running in PORT ${PORT}`);
})
