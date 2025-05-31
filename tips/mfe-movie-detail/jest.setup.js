import "jest-canvas-mock";
import { server } from "./src/mocks/node";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock(
    "@techschool/params-shell",
    () => {
        return {
            __esModule: true,
            PARAMS_SHELL: {
                clientId: "99999999-5555-4444-82c6-a7f5183144411",
                urlBaseMfeBanner: "http://localhost:3000",
                urlBaseMfeX: "http://localhost:3000",
            },
        };
    },
    { virtual: true }
);

jest.mock("single-spa", () => {
    return {
        navigateToUrl: jest.fn(),
    };
});