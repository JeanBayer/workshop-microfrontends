import { PARAMS_SHELL } from "@techschool/params-shell";

const INFO = {
  SOCIAL: [
    { name: "Facebook", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "YouTube", url: "#" },
  ],
  INFO: [
    [
      { name: "Audio and Subtitles", url: "#" },
      { name: "Help Center", url: "#" },
      { name: "Gift Cards", url: "#" },
      { name: "Press", url: "#" },
    ],
    [
      { name: "Investor Relations", url: "#" },
      { name: "Jobs", url: "#" },
      { name: "Terms of Use", url: "#" },
      { name: "Contact", url: "#" },
    ],
    [
      { name: "Legal Notices", url: "#" },
      { name: "Cookie Preferences", url: "#" },
      { name: "Corporate Information", url: "#" },
      { name: "Privacy", url: "#" },
    ],
  ],
  COPYRIGHT: "© All rights reserved.",
};

const { MFE_FOOTER_PARAMS } = PARAMS_SHELL;

export const PARAMS = {
  ...MFE_FOOTER_PARAMS,
  INFO: MFE_FOOTER_PARAMS?.INFO || INFO,
};
