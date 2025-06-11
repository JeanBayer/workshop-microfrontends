import { categoryServiceHandlerDefault } from "@mocks/category.service.handler";
import { setupServer } from "msw/node";

export const server = setupServer(...categoryServiceHandlerDefault);

server.events.on("request:start", ({ request }) => {
  console.log("MSW intercepted:", request.method, request.url);
});
