import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProjectList from "./ProjectList";
import { projects } from "./projects";

describe("ProjectList", () => {
  it("renders every project as a structured case study", () => {
    render(<ProjectList />);

    for (const project of projects) {
      const title = screen.getByRole("heading", { name: project.title });
      const card = title.closest("li");

      expect(card).not.toBeNull();
      expect(within(card).getByText("The challenge")).toBeInTheDocument();
      expect(within(card).getByText("The solution")).toBeInTheDocument();
      expect(within(card).getByText("The outcome")).toBeInTheDocument();
      expect(within(card).getByText(project.outcome)).toBeInTheDocument();
      expect(within(card).getByText("My contribution")).toBeInTheDocument();
      expect(
        within(card).getByRole("link", { name: "Live Demo" }),
      ).toHaveAttribute("href", project.liveUrl);
      expect(
        within(card).getByRole("link", { name: "Source Code" }),
      ).toHaveAttribute("href", project.sourceUrl);

      for (const technology of project.technologies) {
        expect(within(card).getByText(technology)).toBeInTheDocument();
      }
    }
  });
});
