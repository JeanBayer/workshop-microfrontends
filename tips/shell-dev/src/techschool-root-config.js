// import { MFE_SYSTEM_PARAMS } from "@devschool/params-mfe";
import { registerApplication, start } from "single-spa";
import "./styles/main.css";
import "./styles/normalize.css";

registerApplication({
  name: "@techschool/mfe-navbar",
  app: () => System.import("@techschool/mfe-navbar"),
  activeWhen: [""],
});

registerApplication({
  name: "@techschool/mfe-hero-banner",
  app: () => System.import("@techschool/mfe-hero-banner"),
  activeWhen: ({ pathname }) => {
    return pathname === "/";
  },
});

registerApplication({
  name: "@techschool/mfe-movies-categories",
  app: () => System.import("@techschool/mfe-movies-categories"),
  activeWhen: ({ pathname }) => {
    return pathname === "/";
  },
});

registerApplication({
  name: "@techschool/mfe-movie-detail",
  app: () => System.import("@techschool/mfe-movie-detail"),
  activeWhen: ["/movies/:movieId"],
});

registerApplication({
  name: "@techschool/mfe-footer",
  app: () => System.import("@techschool/mfe-footer"),
  activeWhen: [""],
});

start({
  urlRerouteOnly: true,
});
