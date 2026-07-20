import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("shows the clinical headline and CRP", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        name: /cuidado clínico para infância e adolescência/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getAllByText(/CRP 08\/47222/i).length).toBeGreaterThan(0);
  });

  it("links the primary CTA to WhatsApp", () => {
    render(<Hero />);

    const cta = screen.getByRole("link", { name: /agendar consulta/i });
    expect(cta).toHaveAttribute(
      "href",
      expect.stringContaining("https://wa.me/5543991225366"),
    );
  });
});
