import express from "express";

import { ServerConfig, DBConfig } from "./config/index.js";

const app = express();

DBConfig.connectDB();


app.listen(ServerConfig.PORT, () => {
    console.log("Server is running!");
})