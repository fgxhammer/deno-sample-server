import { MongoClient } from "../../dependencies.ts";
import config from "./db.config.ts";

const client = new MongoClient();
console.log(config);

try {
  client.connect(config.CONNECTION_URI);
  console.log("Connecting to db ...");
} catch (e) {
  console.error("CONNECTION ERROR: ", e);
}

const db = client.database("deno_app");
const usersCollection = db.collection("users");

export { usersCollection };
