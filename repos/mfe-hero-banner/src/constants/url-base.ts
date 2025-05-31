import { PARAMS_SHELL } from "@techschool/params-shell";

export const URL_BASE =
  process.env.REACT_APP_URL_BASE_MFE_BANNER || PARAMS_SHELL?.urlBaseMfeBanner;
