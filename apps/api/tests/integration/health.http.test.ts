import { describe, expect, it } from "vitest";
import { createHealthRouter } from "../../src/modules/health/healthRoute.js";

describe("health HTTP integration", () => {
  it("registers the health route for HTTP integration", () => {
    const router = createHealthRouter();
    const registeredRoute = router.stack.find((layer) => layer.route?.path === "/health");

    expect(registeredRoute).toBeDefined();
    expect(registeredRoute?.route?.methods.get).toBe(true);
  });
});
