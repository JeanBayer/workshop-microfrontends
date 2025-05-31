declare module "@techschool/params-shell" {
  export const PARAMS_SHELL: {
    clientId: string;
    urlBaseMfeX: string;
    MFE_FOOTER_PARAMS: {
      INFO: {
        SOCIAL: {
          name: string;
          url: string;
        }[];
        INFO: {
          name: string;
          url: string;
        }[][];
        COPYRIGHT: string;
      };
    };
  };
}

declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.html" {
  const rawHtmlFile: string;
  export = rawHtmlFile;
}

declare module "*.bmp" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}
