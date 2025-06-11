import { Navbar } from "@main/main";
import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { navigateToUrl } from "single-spa";

describe("Navbar", () => {
  it("loads and displays Navbar", async () => {
    render(<Navbar />);

    // logo
    expect(
      screen.getByRole("img", { name: "Techschool Logo" })
    ).toBeInTheDocument();

    const homeLink = screen.getByRole("link", { name: "Home" });
    const seriesLink = screen.getByRole("link", { name: "Series" });
    const moviesLink = screen.getByRole("link", { name: "Movies" });
    const latestLink = screen.getByRole("link", { name: "Latest" });
    const myListLink = screen.getByRole("link", { name: "My List" });

    expect(homeLink).toHaveAttribute("href", "/");
    expect(seriesLink).toHaveAttribute("href", "/series");
    expect(moviesLink).toHaveAttribute("href", "/movies");
    expect(latestLink).toHaveAttribute("href", "/latest");
    expect(myListLink).toHaveAttribute("href", "/my-list");

    // action icons
    expect(screen.getByLabelText("search")).toBeInTheDocument();
    expect(screen.getByLabelText("notifications")).toBeInTheDocument();
    expect(screen.getByLabelText("profile")).toBeInTheDocument();
  });

  it("click on nav items navigates to the correct URL", async () => {
    render(<Navbar />);

    const homeLink = screen.getByRole("link", { name: "Home" });
    const seriesLink = screen.getByRole("link", { name: "Series" });
    const moviesLink = screen.getByRole("link", { name: "Movies" });
    const latestLink = screen.getByRole("link", { name: "Latest" });
    const myListLink = screen.getByRole("link", { name: "My List" });

    await userEvent.click(homeLink);
    expect(navigateToUrl).toHaveBeenCalledWith("/");

    await userEvent.click(seriesLink);
    expect(navigateToUrl).toHaveBeenCalledWith("/series");

    await userEvent.click(moviesLink);
    expect(navigateToUrl).toHaveBeenCalledWith("/movies");

    await userEvent.click(latestLink);
    expect(navigateToUrl).toHaveBeenCalledWith("/latest");

    await userEvent.click(myListLink);
    expect(navigateToUrl).toHaveBeenCalledWith("/my-list");
  });

  it("applies scrolled class when window is scrolled", () => {
    render(<Navbar />);
    const navbarElement = screen.getByRole("navigation");

    expect(navbarElement).not.toHaveClass("scrolled");

    act(() => {
      Object.defineProperty(window, "scrollY", {
        value: 100,
        configurable: true,
      });
      window.dispatchEvent(new Event("scroll"));
    });

    expect(navbarElement).toHaveClass("scrolled");

    act(() => {
      Object.defineProperty(window, "scrollY", {
        value: 0,
        configurable: true,
      });
      window.dispatchEvent(new Event("scroll"));
    });

    expect(navbarElement).not.toHaveClass("scrolled");
  });
});
