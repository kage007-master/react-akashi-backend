import http from "http"
import express from "./services/express"
import routes from "./routes"
import mongoose, { ConnectOptions } from "mongoose";
import { ServerApiVersion } from "mongodb";

const uri = "mongodb://127.0.0.1:27017/CharactorData";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  } as ConnectOptions)
  .then((db) => {
    console.log("database is connected");
  })
  .catch((err) => console.log(err));

const app = express(routes);
const server = http.createServer(app);
server.listen(3000, () => {
    console.log("Server is running on port 3000")
})