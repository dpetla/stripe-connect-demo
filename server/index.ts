import * as serverless from "serverless-http";
import "source-map-support/register";
import * as express from "express";

const app = express();
app.use(
  express.json({
    verify: function (req, res, buf) {
      if (req.originalUrl.startsWith("/webhook")) {
        req.rawBody = buf.toString();
      }
    },
  })
);

app.get("/health", (req, res) => res.status(200).send("ok"));

export const handler = serverless(app);
