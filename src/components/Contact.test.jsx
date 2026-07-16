import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Contact from "./Contact";

describe("Contact", () => {
  it("provides clear email and professional profile links", () => {
    render(<Contact />);

    expect(
      screen.getByRole("heading", {
        name: "Let's connect.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Send an email" })).toHaveAttribute(
      "href",
      expect.stringContaining("mailto:minaeva9@gmail.com"),
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "target",
      "_blank",
    );
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "target",
      "_blank",
    );
  });
});
