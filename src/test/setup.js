import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

class IntersectionObserverMock {
  constructor(callback) {
    this.callback = callback;
    window.__intersectionObservers.push(this);
  }

  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();

  trigger(entries) {
    this.callback(entries, this);
  }
}

beforeEach(() => {
  window.__intersectionObservers = [];
  window.location.hash = "";
  vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});
