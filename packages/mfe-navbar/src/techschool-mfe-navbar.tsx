import { Navbar } from "@main/main";
import React from "react";
import * as ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Navbar,
  errorBoundary(err: Error, errInfo: React.ErrorInfo, props: any) {
    console.log(err, errInfo, props);
    return <div></div>;
  },
});

export const { mount, unmount } = lifecycles;
