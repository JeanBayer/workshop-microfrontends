import { heroServiceHandlerDefault } from "@mocks/hero.service.handler";
import { setupServer } from "msw/node";

export const server = setupServer(...heroServiceHandlerDefault);

server.events.on("request:start", ({ request }) => {
  console.log("MSW intercepted:", request.method, request.url);
});
