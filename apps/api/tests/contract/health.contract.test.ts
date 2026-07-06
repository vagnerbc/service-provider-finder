import { describe, expect, it } from "vitest";
import { createHealthStatus } from "../../src/modules/health/healthStatus.js";

describe("GET /health contract", () => {
  it("matches the public health contract without internal details", () => {
    const responseBody = createHealthStatus(new Date("2026-07-06T00:00:00.000Z"));

    expect(responseBody).toMatchObject({
      status: "healthy",
      service: "faxinal-conectado-api"
    });
    expect(typeof responseBody.timestamp).toBe("string");
    expect(Object.keys(responseBody).sort()).toEqual(["service", "status", "timestamp"]);
    expect(JSON.stringify(responseBody)).not.toContain("DATABASE_URL");
  });
});
