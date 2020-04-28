import * as serverless from "serverless-http";
import * as express from "express";
import * as cors from "cors";
import usersRouter from "./handlers/users";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/health", (req, res) => res.status(200).send("ok"));

app.use("/users", usersRouter);

export const handler = serverless(app);
