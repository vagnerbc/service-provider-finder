import { expect, test } from "@playwright/test";

const apiBaseUrl = process.env.API_BASE_URL ?? "http://localhost:3333";

test("API health check returns public healthy status", async ({ request }) => {
  const response = await request.get(`${apiBaseUrl}/health`);
  expect(response.ok()).toBe(true);

  const body = await response.json();
  expect(body.status).toBe("healthy");
  expect(body.service).toBe("faxinal-conectado-api");
  expect(typeof body.timestamp).toBe("string");
  expect(Object.keys(body).sort()).toEqual(["service", "status", "timestamp"]);
});
