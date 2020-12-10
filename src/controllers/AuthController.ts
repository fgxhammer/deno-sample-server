import { RouterContext } from "../../dependencies.ts";
import User from "../models/User.ts";

class AuthController {
  login({ request, response }: RouterContext) {
  }
  async register({ request, response }: RouterContext) {
    const { name, email, password } = await request.body().value;
    const user = await User.findOne({ email });
    console.log(user);
  }
}

const authController = new AuthController();

export default authController;
