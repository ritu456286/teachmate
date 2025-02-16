import express from "express";

import { ServerConfig, DBConfig } from "./config/index.js";

import { apiRoutes } from "./routes/index.js";
const app = express();

DBConfig.connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server is running! on PORT: ${ServerConfig.PORT}`);
})