import express from "express";
import cors from "cors";

import user_router from "../routes/user.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //middlewares
    this.middlewares();

    //routes
    this.routes();
  }

  middlewares() {
    //Directorio publico.
    this.app.use(express.static("public"));

    this.app.use(express.json())

    //CORS
    this.app.use(cors());
  }

  routes() {
    this.app.use("/api/user/", user_router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Listen on port: ", this.port);
    });
  }


}

export default Server;
