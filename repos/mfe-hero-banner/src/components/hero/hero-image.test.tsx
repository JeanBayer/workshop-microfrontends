import { HeroImage } from "./hero-image";

import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";

describe("HeroImage", () => {
  it("applies scrolled class when window is scrolled", () => {
    render(
      <HeroImage title="Titanic" imageUrl="https://example.com/titanic.jpg" />
    );
    const heroImageElement = screen.getByTestId("hero-image-vignette");

    expect(heroImageElement).toHaveAttribute("data-is-scrolled", "false");
    act(() => {
      Object.defineProperty(window, "scrollY", {
        value: 100,
        configurable: true,
      });
      window.dispatchEvent(new Event("scroll"));
    });

    expect(heroImageElement).toHaveAttribute("data-is-scrolled", "true");

    act(() => {
      Object.defineProperty(window, "scrollY", {
        value: 0,
        configurable: true,
      });
      window.dispatchEvent(new Event("scroll"));
    });

    expect(heroImageElement).toHaveAttribute("data-is-scrolled", "false");
  });
});
