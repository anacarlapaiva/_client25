import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, LinkButton } from "./Button";

describe("Button", () => {
  it("renders children and handles clicks", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Agendar</Button>);

    const button = screen.getByRole("button", { name: "Agendar" });
    await user.click(button);

    expect(onClick).toHaveBeenCalledOnce();
  });

  it("applies the ghost variant styles", () => {
    render(<Button variant="ghost">Secundário</Button>);
    expect(screen.getByRole("button", { name: "Secundário" })).toHaveClass(
      "border",
    );
  });
});

describe("LinkButton", () => {
  it("renders as a link with the given href", () => {
    render(
      <LinkButton href="https://wa.me/5543991225366">WhatsApp</LinkButton>,
    );

    const link = screen.getByRole("link", { name: "WhatsApp" });
    expect(link).toHaveAttribute("href", "https://wa.me/5543991225366");
  });
});
