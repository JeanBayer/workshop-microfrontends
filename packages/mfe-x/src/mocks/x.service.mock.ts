const X = {
  id: "k1l2m3n4-o5p6-q7r8-s9t0-u1v2w3x4y5z6",
} as const;

const X_ERROR = {
  error: "Error fetching x data",
} as const;

const NULL_X = null;

const GET_X_RESPONSES = {
  OK: X,
  ERROR: X_ERROR,
  NULL: NULL_X,
} as const;

export const X_SERVICE_MOCK = {
  GET_X: GET_X_RESPONSES,
} as const;
