import { URL_BASE } from "@constants/url-base";
import { X_SERVICE_MOCK } from "@mocks/x.service.mock";
import { http, HttpResponse } from "msw";

export const xServiceHandlerDefault = [
  http.get(`${URL_BASE}/x`, () => {
    return HttpResponse.json(X_SERVICE_MOCK.GET_X.OK);
  }),
];

export const xServiceHandlerError = [
  http.get(`${URL_BASE}/x`, () => {
    return HttpResponse.json(X_SERVICE_MOCK.GET_X.ERROR, {
      status: 500,
    });
  }),
];

export const xServiceHandlerNull = [
  http.get(`${URL_BASE}/x`, () => {
    return HttpResponse.json(X_SERVICE_MOCK.GET_X.NULL);
  }),
];
