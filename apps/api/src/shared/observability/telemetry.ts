import { trace } from "@opentelemetry/api";

export function initializeTelemetry(serviceName: string): void {
  console.info(
    JSON.stringify({
      level: "info",
      event: "telemetry.initialized",
      service: serviceName
    })
  );
}

export function getTracer() {
  return trace.getTracer("faxinal-conectado-api");
}
