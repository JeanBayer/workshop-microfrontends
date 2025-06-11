import { Main } from "@main/main";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Main", () => {
  it("loads and displays Footer", async () => {
    render(<Main />);

    // social section
    expect(screen.getByRole("link", { name: "Facebook" })).toHaveAttribute(
      "href",
      "/facebook"
    );
    expect(screen.getByRole("link", { name: "Instagram" })).toHaveAttribute(
      "href",
      "/instagram"
    );

    // info section
    const column = screen.getAllByTestId("column");
    expect(column).toHaveLength(3);

    // first column
    expect(
      screen.getByRole("link", { name: "Audio and Subtitles" })
    ).toHaveAttribute("href", "#");
    expect(screen.getByRole("link", { name: "Help Center" })).toHaveAttribute(
      "href",
      "#"
    );

    // second column
    expect(
      screen.getByRole("link", { name: "Investor Relations" })
    ).toHaveAttribute("href", "#");
    expect(screen.getByRole("link", { name: "Jobs" })).toHaveAttribute(
      "href",
      "#"
    );

    // third column
    expect(screen.getByRole("link", { name: "Legal Notices" })).toHaveAttribute(
      "href",
      "#"
    );
    expect(
      screen.getByRole("link", { name: "Cookie Preferences" })
    ).toHaveAttribute("href", "#");

    // copyright
    expect(screen.getByText("© All rights reserved.")).toBeInTheDocument();
  });
});
