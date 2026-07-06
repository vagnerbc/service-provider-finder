import { expect, test } from "@playwright/test";

test("home page presents Faxinal Conectado across viewports", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Faxinal Conectado" })).toBeVisible();
  await expect(page.getByText(/prestadores de serviços locais/i)).toBeVisible();
  await expect(page.getByText(/Plataforma em preparação/i)).toBeVisible();

  const horizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth
  );
  expect(horizontalOverflow).toBe(false);
});
