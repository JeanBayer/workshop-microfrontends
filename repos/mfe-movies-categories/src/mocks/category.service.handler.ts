import { URL_BASE } from "@constants/url-base";
import { CATEGORY_SERVICE_MOCK } from "@mocks/category.service.mock";
import { http, HttpResponse } from "msw";

export const categoryServiceHandlerDefault = [
  http.get(`${URL_BASE}/categories`, () => {
    return HttpResponse.json(CATEGORY_SERVICE_MOCK.GET_CATEGORIES.OK);
  }),
];

export const categoryServiceHandlerError = [
  http.get(`${URL_BASE}/categories`, () => {
    return HttpResponse.json(CATEGORY_SERVICE_MOCK.GET_CATEGORIES.ERROR, {
      status: 500,
    });
  }),
];

export const categoryServiceHandlerNull = [
  http.get(`${URL_BASE}/categories`, () => {
    return HttpResponse.json(CATEGORY_SERVICE_MOCK.GET_CATEGORIES.NULL);
  }),
];
