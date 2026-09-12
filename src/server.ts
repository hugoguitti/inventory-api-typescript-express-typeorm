import app from "./app.js";
import { AppDataSource } from "./database/data-source.js";

AppDataSource.initialize()
  .then(() => {
    app.listen(5000);
  })
  .catch((e: unknown) => {
    const error = "Failed to initialize database: ";

    if (e instanceof Error) {
      console.log(error + e.message);
      return;
    }

    console.log(error + String(e));
  });
