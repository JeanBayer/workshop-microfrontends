import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from "@tanstack/react-query";
import { render, RenderOptions } from "@testing-library/react";

export const renderWithClient = (
  ui: React.ReactElement,
  config?: QueryClientConfig,
  options?: RenderOptions
) => {
  const queryClient = new QueryClient(config);
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
    options
  );
};
