import { describe, expect, it } from "vitest";
import { createHealthStatus } from "../../src/modules/health/healthStatus.js";

describe("createHealthStatus", () => {
  it("returns a stable healthy API status", () => {
    const status = createHealthStatus(new Date("2026-07-06T00:00:00.000Z"));

    expect(status).toEqual({
      status: "healthy",
      service: "faxinal-conectado-api",
      timestamp: "2026-07-06T00:00:00.000Z"
    });
  });
});
