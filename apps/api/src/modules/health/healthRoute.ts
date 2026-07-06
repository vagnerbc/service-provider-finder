import { SpanStatusCode } from "@opentelemetry/api";
import { Router } from "express";
import { getTracer } from "../../shared/observability/telemetry.js";
import { createHealthStatus } from "./healthStatus.js";

export function createHealthRouter(): Router {
  const router = Router();

  router.get("/health", (_request, response) => {
    const tracer = getTracer();

    return tracer.startActiveSpan("health.check", (span) => {
      try {
        const healthStatus = createHealthStatus();

        span.setAttribute("http.route", "/health");
        span.setAttribute("service.health.status", healthStatus.status);
        span.setStatus({ code: SpanStatusCode.OK });

        console.info(
          JSON.stringify({
            level: "info",
            event: "health.check",
            status: healthStatus.status,
            service: healthStatus.service
          })
        );

        response.status(200).json(healthStatus);
      } finally {
        span.end();
      }
    });
  });

  return router;
}
