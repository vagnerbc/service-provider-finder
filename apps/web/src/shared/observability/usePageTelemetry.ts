import { trace } from "@opentelemetry/api";
import { useEffect } from "react";

export function usePageTelemetry(pageName: string): void {
  useEffect(() => {
    const tracer = trace.getTracer("faxinal-conectado-web");
    const span = tracer.startSpan("page.view", {
      attributes: {
        "page.name": pageName
      }
    });

    span.end();
  }, [pageName]);
}
