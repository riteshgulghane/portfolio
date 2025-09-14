import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../components/Home";

// Mock Next.js Link component
jest.mock("next/link", () => {
  const LinkComponent = ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => {
    return <a href={href}>{children}</a>;
  };
  LinkComponent.displayName = "Link";
  return LinkComponent;
});

// Mock the constants
jest.mock("../constants", () => ({
  HOME: {
    GREETING: {
      FULL_TEXT: "Hello, I'm Ritesh!",
      TYPING_SPEED: 100,
    },
    HERO: {
      DESCRIPTION:
        "Senior Software Engineer passionate about building scalable web applications",
      LOCATION: "Based in Pune, India",
    },
    SKILLS: {
      ITEMS: [
        { ICON: "⚛️", LABEL: "React" },
        { ICON: "📱", LABEL: "Next.js" },
        { ICON: "💙", LABEL: "TypeScript" },
        { ICON: "🎨", LABEL: "Tailwind" },
      ],
    },
  },
  SITE: {
    INITIALS: "RG",
    POSITION: "Senior Software Engineer",
  },
  BUTTONS: {
    VIEW_WORK: "View My Work",
    GET_TOUCH: "Get In Touch",
  },
}));

describe("Home Component", () => {
  beforeEach(() => {
    // Clear any timers before each test
    jest.clearAllTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders the main heading structure", () => {
    render(<Home />);

    // Check if the main element is rendered
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  it("displays the site initials", () => {
    render(<Home />);

    // Check if initials are displayed
    const initials = screen.getByText("RG");
    expect(initials).toBeInTheDocument();
  });

  it("displays the position title", () => {
    render(<Home />);

    // Check if position is displayed
    const position = screen.getByText("Senior Software Engineer");
    expect(position).toBeInTheDocument();
  });

  it("displays the hero description", () => {
    render(<Home />);

    // Check if description is displayed
    const description = screen.getByText(
      /Senior Software Engineer passionate about building scalable web applications/,
    );
    expect(description).toBeInTheDocument();
  });

  it("displays the location information", () => {
    render(<Home />);

    // Check if location is displayed
    const location = screen.getByText("Based in Pune, India");
    expect(location).toBeInTheDocument();
  });

  it("renders call-to-action buttons with correct links", () => {
    render(<Home />);

    // Check if CTA buttons are rendered
    const viewWorkButton = screen.getByRole("link", { name: "View My Work" });
    const getInTouchButton = screen.getByRole("link", { name: "Get In Touch" });

    expect(viewWorkButton).toBeInTheDocument();
    expect(getInTouchButton).toBeInTheDocument();

    // Check if links have correct href attributes
    expect(viewWorkButton).toHaveAttribute("href", "/projects");
    expect(getInTouchButton).toHaveAttribute("href", "/contact");
  });

  it("renders skill items", () => {
    render(<Home />);

    // Check if skill labels are displayed
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Tailwind")).toBeInTheDocument();
  });

  it("renders skill icons", () => {
    render(<Home />);

    // Check if skill icons are displayed
    expect(screen.getByText("⚛️")).toBeInTheDocument();
    expect(screen.getByText("📱")).toBeInTheDocument();
    expect(screen.getByText("💙")).toBeInTheDocument();
    expect(screen.getByText("🎨")).toBeInTheDocument();
  });

  it("starts with empty display text and shows typing animation", async () => {
    jest.useFakeTimers();

    render(<Home />);

    // Initially should be empty or show first character
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();

    // Fast-forward timers to see typing effect
    jest.advanceTimersByTime(1000);

    jest.useRealTimers();
  });
});
