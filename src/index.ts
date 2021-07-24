import Logger from "./infrastructure/lib/Logger";
import app from "./infrastructure/server/express";

app.listen(3000, () => Logger.info("localhost: 3ooo"));
