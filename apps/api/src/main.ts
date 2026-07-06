import { loadConfig } from "./shared/config/env.js";
import { createHttpServer } from "./shared/http/server.js";
import { initializeTelemetry } from "./shared/observability/telemetry.js";
import { createHealthModule } from "./modules/health/index.js";

export function createApp() {
  return createHttpServer([createHealthModule()]);
}

if (process.env.NODE_ENV !== "test") {
  const config = loadConfig();
  initializeTelemetry(config.OTEL_SERVICE_NAME);

  const app = createApp();
  app.listen(config.API_PORT, () => {
    console.info(
      JSON.stringify({
        level: "info",
        event: "api.started",
        port: config.API_PORT
      })
    );
  });
}
