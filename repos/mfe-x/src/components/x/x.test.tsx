import { server } from "@mocks/node";
import {
  xServiceHandlerError,
  xServiceHandlerNull,
} from "@mocks/x.service.handler";
import "@testing-library/jest-dom";
import { screen, waitFor } from "@testing-library/react";
import { renderWithClient } from "@utils/test-util";
import { X } from "./x";

it("loads and displays greeting", async () => {
  renderWithClient(<X />);
  expect(screen.getByText("User")).toBeInTheDocument();

  await waitFor(() => {
    expect(
      screen.getByText("k1l2m3n4-o5p6-q7r8-s9t0-u1v2w3x4y5z6")
    ).toBeInTheDocument();
  });
});

it("loads and displays error", async () => {
  server.use(...xServiceHandlerError);
  renderWithClient(<X />, {
    defaultOptions: { queries: { retry: false } },
  });
  expect(screen.getByText("User")).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText("Error")).toBeInTheDocument();
  });
});

it("loads and displays null data", async () => {
  server.use(...xServiceHandlerNull);
  renderWithClient(<X />, {
    defaultOptions: { queries: { retry: false } },
  });
  expect(screen.getByText("User")).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText("No data available")).toBeInTheDocument();
  });
});
