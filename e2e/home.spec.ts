import { test, expect } from "@playwright/test";

test.describe("Portfolio Website Tests", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to homepage before each test
    await page.goto("/");
  });

  test("homepage: title and meta content", async ({ page }) => {
    // Check for specific portfolio title
    await expect(page).toHaveTitle("Ritesh's Portfolio");

    // Verify meta description exists
    const metaDescription = await page.locator('meta[name="description"]');
    await expect(metaDescription).toBeAttached();
  });

  test("homepage: header elements and content", async ({ page }) => {
    // Check for main greeting text (it's dynamically typed, so wait for it)
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();

    // Verify navigation menu exists (desktop version)
    const navMenu = page.locator("nav.hidden.md\\:block");
    await expect(navMenu).toBeVisible();

    // Check for call-to-action buttons with exact text
    const viewWorkButton = page.getByRole("link", { name: "View My Work" });
    await expect(viewWorkButton).toBeVisible();
  });

  test("navigation: about page", async ({ page }) => {
    // Click About link
    const aboutLink = page.getByRole("link", { name: "About" });
    await aboutLink.click();

    // Verify navigation worked
    await expect(page).toHaveURL(/\/about/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    // Check for experience section
    await expect(page.getByText("Experience", { exact: false })).toBeVisible();
  });

  test("navigation: projects page", async ({ page }) => {
    // Click Projects link
    const projectsLink = page.getByRole("link", { name: "Projects" });
    await projectsLink.click();

    // Verify navigation worked
    await expect(page).toHaveURL(/\/projects/);

    // Check for project cards or project content
    const projectContent = page
      .getByText("Food Delivery")
      .or(page.getByText("Planning Poker"))
      .or(page.getByText("Portfolio"));
    await expect(projectContent.first()).toBeVisible();
  });

  test("navigation: contact page", async ({ page }) => {
    // Click Contact link
    const contactLink = page.getByRole("link", { name: "Contact" });
    await contactLink.click();

    // Verify navigation worked
    await expect(page).toHaveURL(/\/contact/);

    // Check for contact form or contact content
    const contactHeading = page.getByRole("heading", { level: 1 });
    await expect(contactHeading).toBeVisible();
  });

  test("responsive design: mobile view", async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });

    // Wait for any responsive adjustments
    await page.waitForTimeout(500);

    // Find the mobile menu button - it should be visible on mobile
    const menuButton = page.locator('button[aria-label="Toggle menu"]');
    // Force visibility check since CSS might hide it
    await menuButton.click({ force: true });

    // Wait for menu animation to complete
    await page.waitForTimeout(1000);

    // Verify mobile menu appears after clicking
    const mobileMenuContainer = page.locator(".md\\:hidden").last();
    await expect(mobileMenuContainer).toBeVisible();
  });
});
