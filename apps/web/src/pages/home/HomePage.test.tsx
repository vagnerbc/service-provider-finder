import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AppProvider } from "../../app/AppProvider";
import { prohibitedUnavailableActions } from "./homeContent";
import { HomePage } from "./HomePage";

function renderHomePage() {
  return render(
    <AppProvider>
      <HomePage />
    </AppProvider>
  );
}

describe("HomePage", () => {
  it("renders required Portuguese content", () => {
    renderHomePage();

    expect(screen.getByRole("heading", { level: 1, name: "Faxinal Conectado" })).toBeInTheDocument();
    expect(screen.getByText(/prestadores de serviços locais/i)).toBeInTheDocument();
    expect(screen.getByText(/plataforma em preparação/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Para a comunidade" })).toBeInTheDocument();
  });

  it("does not render unavailable marketplace actions", () => {
    renderHomePage();
    const pageText = document.body.textContent?.toLocaleLowerCase("pt-BR") ?? "";

    for (const action of prohibitedUnavailableActions) {
      expect(pageText).not.toContain(action);
    }
  });
});
