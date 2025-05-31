const MFE_SYSTEM_PARAMS = {
  inputTitle: "input title param",
};

System.register([], function (_export, _context) {
  return {
    execute: function () {
      _export("MFE_SYSTEM_PARAMS", MFE_SYSTEM_PARAMS);
    },
  };
});
