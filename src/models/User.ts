import { usersCollection } from "../db/db.ts";

export default class User {
  static findOne(params: Object) {
    return usersCollection.findOne(params);
  }
}
