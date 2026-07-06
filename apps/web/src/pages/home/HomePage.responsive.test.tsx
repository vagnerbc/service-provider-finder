import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AppProvider } from "../../app/AppProvider";
import { HomePage } from "./HomePage";

describe("HomePage responsive structure", () => {
  it("keeps primary content available for narrow screens", () => {
    Object.defineProperty(window, "innerWidth", { configurable: true, value: 360 });

    render(
      <AppProvider>
        <HomePage />
      </AppProvider>
    );

    expect(screen.getByRole("heading", { name: "Faxinal Conectado" })).toBeVisible();
    expect(screen.getByText(/Próximos passos/i)).toBeVisible();
  });
});
