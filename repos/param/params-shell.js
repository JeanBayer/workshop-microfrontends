const MFE_FOOTER_PARAMS = {
  INFO: {
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
  },
};

const PARAMS_SHELL = {
  clientId: "clientId:123",
  urlBaseMfeBanner: "https://ornate-treacle-326ebe.netlify.app/api",
  urlBaseMfeMoviesCategories: "https://ornate-treacle-326ebe.netlify.app/api",
  MFE_FOOTER_PARAMS,
};

System.register([], function (_export, _context) {
  return {
    execute: function () {
      _export("PARAMS_SHELL", PARAMS_SHELL);
    },
  };
});
