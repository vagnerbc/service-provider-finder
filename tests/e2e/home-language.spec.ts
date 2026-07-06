import { expect, test } from "@playwright/test";

test("home page visible copy stays in Portuguese Brazil and hides unavailable actions", async ({
  page
}) => {
  await page.goto("/");
  const text = (await page.locator("body").innerText()).toLocaleLowerCase("pt-BR");

  await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
  expect(text).toContain("encontre prestadores de serviços locais");
  expect(text).not.toContain("login");
  expect(text).not.toContain("criar conta");
  expect(text).not.toContain("buscar agora");
});
