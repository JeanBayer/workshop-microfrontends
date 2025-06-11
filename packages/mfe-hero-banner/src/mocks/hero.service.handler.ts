import { URL_BASE } from "@constants/url-base";
import { HERO_SERVICE_MOCK } from "@mocks/hero.service.mock";
import { http, HttpResponse } from "msw";

export const heroServiceHandlerDefault = [
  http.get(`${URL_BASE}/hero`, () => {
    return HttpResponse.json(HERO_SERVICE_MOCK.GET_HERO.OK);
  }),
];

export const heroServiceHandlerError = [
  http.get(`${URL_BASE}/hero`, () => {
    return HttpResponse.json(HERO_SERVICE_MOCK.GET_HERO.ERROR, {
      status: 500,
    });
  }),
];

export const heroServiceHandlerNull = [
  http.get(`${URL_BASE}/hero`, () => {
    return HttpResponse.json(HERO_SERVICE_MOCK.GET_HERO.NULL);
  }),
];
