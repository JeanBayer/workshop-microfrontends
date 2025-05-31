import { server } from "@mocks/node";
import "jest-canvas-mock";
import { navigateToUrl } from "single-spa";

beforeEach(() => {
  navigateToUrl.mockClear();
});
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Este módulo debe falsificarse ya que solo existe en tiempo de ejecución
jest.mock(
  "@techschool/params-shell",
  () => {
    return {
      __esModule: true,
      PARAMS_SHELL: {
        clientId: "99999999-5555-4444-82c6-a7f5183144411",
        urlBaseMfeBanner: "http://localhost:3000",
        urlBaseMfeX: "http://localhost:3000",
        urlBaseMfeMoviesCategories: "http://localhost:3000",
      },
    };
  },
  { virtual: true } // Dado que este módulo no existe en la carpeta node_modules porque será proveido en tiempo de ejecución a través de Import Maps se declara como virtual para durante las pruebas con Jest, ofrezca la implementación falsa.
);

jest.mock("single-spa", () => {
  return {
    navigateToUrl: jest.fn(),
  };
});
