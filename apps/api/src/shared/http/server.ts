import express, { type Express, type Router } from "express";

export function createHttpServer(routers: Router[] = []): Express {
  const app = express();

  app.disable("x-powered-by");
  app.use(express.json());

  for (const router of routers) {
    app.use(router);
  }

  app.use((_, response) => {
    response.status(404).json({ status: "not_found" });
  });

  return app;
}
