import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Skills from "./Skills";

describe("Skills", () => {
  it("renders the focused skill categories", () => {
    render(<Skills />);

    for (const category of ["Frontend", "Data & APIs", "Engineering"]) {
      expect(
        screen.getByRole("heading", { name: category }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("list", { name: `${category} skills` }),
      ).toBeInTheDocument();
    }

    expect(
      within(screen.getByRole("list", { name: "Frontend skills" })).getByText(
        "TypeScript",
      ),
    ).toBeInTheDocument();
    expect(
      within(
        screen.getByRole("list", { name: "Data & APIs skills" }),
      ).getByText("Supabase"),
    ).toBeInTheDocument();
  });
});
