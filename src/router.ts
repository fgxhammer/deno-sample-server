import { Router, RouterContext } from "../dependencies.ts";
import authController from "./controllers/AuthController.ts";

const router = new Router();

router.get("/", (ctx: RouterContext) => {
  ctx.response.body = "Hello 🌍 !";
});

router.post("/login", authController.login);
router.post("/register", authController.register);

export default router;
