import { describe, expect, it } from "vitest";
import { site, whatsappLink } from "./site";

describe("site", () => {
  it("exposes Raquel Queiroz contact data", () => {
    expect(site.name).toBe("Raquel Queiroz");
    expect(site.crp).toBe("CRP 08/47222");
    expect(site.whatsappNumber).toBe("5543991225366");
    expect(site.email).toBe("psi.raquelqueiroz@outlook.com");
  });
});

describe("whatsappLink", () => {
  it("returns the base WhatsApp URL without text", () => {
    expect(whatsappLink()).toBe("https://wa.me/5543991225366");
  });

  it("appends an encoded message when text is provided", () => {
    const link = whatsappLink("Olá, Raquel!");
    expect(link).toBe(
      `https://wa.me/5543991225366?text=${encodeURIComponent("Olá, Raquel!")}`,
    );
  });
});
