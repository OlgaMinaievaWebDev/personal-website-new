import { act } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Header from "./Header";

function renderPageWithHeader() {
  return render(
    <>
      <Header />
      <main id="main-content">
        <section id="hero">Hero</section>
        <section id="about">About section</section>
        <section id="work">Work section</section>
        <section id="contact">Contact section</section>
      </main>
    </>,
  );
}

describe("Header", () => {
  it("provides accessible primary and skip navigation", () => {
    renderPageWithHeader();

    expect(
      screen.getByRole("navigation", { name: "Primary navigation" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Skip to content" }),
    ).toHaveAttribute("href", "#main-content");
    expect(
      screen.getByRole("link", {
        name: "Go to the top of Olga Minaieva's portfolio",
      }),
    ).toHaveAttribute("href", "#hero");
  });

  it("highlights the section reported as visible", () => {
    renderPageWithHeader();
    const workSection = document.getElementById("work");

    act(() => {
      window.__intersectionObservers[0].trigger([
        {
          isIntersecting: true,
          intersectionRatio: 0.8,
          target: workSection,
        },
      ]);
    });

    expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute(
      "aria-current",
      "location",
    );
  });

  it("keeps mobile navigation tappable and links to each section", async () => {
    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      value: 390,
    });
    const user = userEvent.setup();
    renderPageWithHeader();

    const links = [
      ["Work", "#work"],
      ["About", "#about"],
      ["Contact", "#contact"],
    ];

    for (const [name, href] of links) {
      const link = screen.getByRole("link", { name });
      expect(link).toHaveClass("min-h-11");
      expect(link).toHaveAttribute("href", href);
    }

    await user.click(screen.getByRole("link", { name: "Contact" }));
    expect(window.location.hash).toBe("#contact");
  });
});
