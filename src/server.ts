import { Application } from "../dependencies.ts";
import router from "./router.ts";

const app = new Application();

const PORT = 1337;

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on ${secure ? "https://" : "http://"}${hostname ||
      "localhost"}:${port}...`,
  );
});

await app.listen({ port: PORT });
