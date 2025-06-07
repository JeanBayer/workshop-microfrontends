import { PLACEHOLDER_DATA } from "@constants/placeholder-data";
import { HeroBanner } from "@main/main";
import {
  heroServiceHandlerError,
  heroServiceHandlerNull,
} from "@mocks/hero.service.handler";
import { server } from "@mocks/node";
import "@testing-library/jest-dom";
import { screen, waitFor } from "@testing-library/react";
import { renderWithClient } from "@utils/test-util";

describe("HeroBanner", () => {
  it("loads and displays data", async () => {
    renderWithClient(<HeroBanner />);

    expect(
      screen.getByText(PLACEHOLDER_DATA.getHero.title)
    ).toBeInTheDocument();
    expect(
      screen.getByText(PLACEHOLDER_DATA.getHero.description)
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Titanic")).toBeInTheDocument();
    });
    expect(
      screen.getByLabelText(
        "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
      )
    ).toBeInTheDocument();

    // description fragmented by the gsap animation
    expect(screen.getByText("seventeen-year-old")).toBeInTheDocument();
    expect(screen.getByText("artist")).toBeInTheDocument();
    expect(screen.getByText("ill-fated")).toBeInTheDocument();

    expect(screen.getByAltText("Titanic")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Play" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "More Info" })
    ).toBeInTheDocument();
  });

  it("handles API error", async () => {
    server.use(...heroServiceHandlerError);
    renderWithClient(<HeroBanner />, {
      defaultOptions: { queries: { retry: false } },
    });

    expect(
      screen.getByText(PLACEHOLDER_DATA.getHero.title)
    ).toBeInTheDocument();
    expect(
      screen.getByText(PLACEHOLDER_DATA.getHero.description)
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Error loading hero data")).toBeInTheDocument();
    });
  });

  it("handles API null data", async () => {
    server.use(...heroServiceHandlerNull);
    renderWithClient(<HeroBanner />, {
      defaultOptions: { queries: { retry: false } },
    });

    expect(
      screen.getByText(PLACEHOLDER_DATA.getHero.title)
    ).toBeInTheDocument();
    expect(
      screen.getByText(PLACEHOLDER_DATA.getHero.description)
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("No hero data available")).toBeInTheDocument();
    });
  });
});
