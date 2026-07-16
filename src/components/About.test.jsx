import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import About from "./About";

describe("About", () => {
  it("introduces Olga and provides her CV", () => {
    render(<About />);

    expect(
      screen.getByRole("heading", { name: "About Me" }),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText("Olga Minaieva, frontend engineer"),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Download CV" })).toHaveAttribute(
      "href",
      "/Olga_Minaieva_Frontend_CV.pdf",
    );
  });
});
