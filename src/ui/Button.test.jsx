import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "./Button";

describe("Button", () => {
  it("renders a link when an href is provided", () => {
    render(<Button href="#work">View work</Button>);

    expect(screen.getByRole("link", { name: "View work" })).toHaveAttribute(
      "href",
      "#work",
    );
  });

  it("renders a non-submitting button without an href", () => {
    render(<Button>Open</Button>);

    expect(screen.getByRole("button", { name: "Open" })).toHaveAttribute(
      "type",
      "button",
    );
  });
});
