import { Main } from "@main/main";
import {
  categoryServiceHandlerError,
  categoryServiceHandlerNull,
} from "@mocks/category.service.handler";
import { server } from "@mocks/node";
import "@testing-library/jest-dom";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { Movie } from "@type/category";
import { renderWithClient } from "@utils/test-util";
import { navigateToUrl } from "single-spa";

describe("Main", () => {
  function testPlaceholderData() {
    // name category
    expect(screen.getByText("Action Packed")).toBeInTheDocument();

    // first movie
    expect(screen.getByAltText("Jurassic Park")).toBeInTheDocument();
    expect(screen.getByText("Jurassic Park")).toBeInTheDocument();
    expect(screen.getByText("★ 8.2")).toBeInTheDocument();
    expect(screen.getByText("1993")).toBeInTheDocument();
    expect(screen.getByText("127 min")).toBeInTheDocument();

    // second movie
    expect(screen.getByAltText("The Dark Knight")).toBeInTheDocument();
    expect(screen.getByText("The Dark Knight")).toBeInTheDocument();
    expect(screen.getByText("★ 9")).toBeInTheDocument();
    expect(screen.getByText("2008")).toBeInTheDocument();
    expect(screen.getByText("152 min")).toBeInTheDocument();
  }

  function testMovie({
    title,
    rating,
    year,
    duration,
  }: Pick<Movie, "title" | "rating" | "year" | "duration">) {
    expect(screen.getByAltText(title)).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(`★ ${rating}`)).toBeInTheDocument();
    expect(screen.getByText(year)).toBeInTheDocument();
    expect(screen.getByText(`${duration} min`)).toBeInTheDocument();
  }

  it("loads and displays data", async () => {
    renderWithClient(<Main />);
    testPlaceholderData();

    await waitFor(() => {
      // row 1 category
      expect(screen.getByText("Action Packed")).toBeInTheDocument();
      testMovie({
        title: "The Matrix",
        rating: 8.7,
        year: 1999,
        duration: 136,
      });
      testMovie({
        title: "Gladiator",
        rating: 8.5,
        year: 2000,
        duration: 155,
      });

      // row 2 category
      expect(screen.getByText("Adventure & Fantasy")).toBeInTheDocument();
      testMovie({
        title: "Harry Potter and the Sorcerer's Stone",
        rating: 7.6,
        year: 2001,
        duration: 152,
      });
      testMovie({
        title: "The Lord of the Rings: The Fellowship of the Ring",
        rating: 8.8,
        year: 2002,
        duration: 178,
      });
    });
  });

  it("clicks a movie", async () => {
    renderWithClient(<Main />);
    testPlaceholderData();

    await waitFor(async () => {
      // row 1 category
      expect(screen.getByText("Action Packed")).toBeInTheDocument();
      testMovie({
        title: "The Matrix",
        rating: 8.7,
        year: 1999,
        duration: 136,
      });
    });

    await userEvent.click(screen.getByText("The Matrix"));
    expect(navigateToUrl).toHaveBeenCalledWith(
      "/movies/h8i9j0k1-l2m3-n4o5-p6q7-r8s9t0u1v2w3"
    );
    expect(navigateToUrl).toHaveBeenCalledTimes(1);
  });

  it("handles API error", async () => {
    server.use(...categoryServiceHandlerError);
    renderWithClient(<Main />, {
      defaultOptions: { queries: { retry: false } },
    });

    testPlaceholderData();

    await waitFor(() => {
      expect(screen.getByText("Error")).toBeInTheDocument();
    });
  });

  it("handles API null data", async () => {
    server.use(...categoryServiceHandlerNull);
    renderWithClient(<Main />, {
      defaultOptions: { queries: { retry: false } },
    });

    testPlaceholderData();
    await waitFor(() => {
      expect(screen.getByText("No data available")).toBeInTheDocument();
    });
  });
});
