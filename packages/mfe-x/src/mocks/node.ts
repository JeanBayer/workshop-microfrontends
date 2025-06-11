import { xServiceHandlerDefault } from "@mocks/x.service.handler";
import { setupServer } from "msw/node";

export const server = setupServer(...xServiceHandlerDefault);

server.events.on("request:start", ({ request }) => {
  console.log("MSW intercepted:", request.method, request.url);
});
