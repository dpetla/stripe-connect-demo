import * as express from "express";
// import dynamoDB from "../dynamodb";÷
import stripe from "../stripe";

// const usersTable = "users-connect";

const usersRouter = express.Router();

usersRouter.post(
  "/token",
  async (req: express.Request, res: express.Response) => {
    const { code } = req.body;

    const response = await stripe.oauth.token({
      grant_type: "authorization_code",
      code,
    });

    var connected_account_id = response.stripe_user_id;
    return res.status(200).send(response);
  }
);

// usersRouter.get("/add", async (req: express.Request, res: express.Response) => {

//   const params = {
//     TableName: usersTable,
//     Item: {
//       stripe_user_id: response.stripe_user_id,
//       access_token: response.access_token,
//     },
//   };
//   const result = await dynamoDB.put(params).promise();
//   res.send(result);
// });

export default usersRouter;
