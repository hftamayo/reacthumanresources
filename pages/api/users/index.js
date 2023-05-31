import connectMongo from "../../../database/conn";
import { getUsers, postUser } from "../../../database/controller";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the Connection" })
  );

  const { method } = req;

  switch (method) {
    case "GET":
      // getUsers(req, res);
      return res.status(200).json({ method, name: "GET Request" });
      break;
    case "POST":
      return res.status(200).json({ method, name: "POST Request" });
      // postUser(req, res);
      break;
    case "PUT":
      return res.status(200).json({ method, name: "PUT Request" });
      break;
    case "DELETE":
      return res.status(200).json({ method, name: "DELETE Request" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      return res.status(405).end(`Method${method} Not Allowed`);
      break;
  }
}
