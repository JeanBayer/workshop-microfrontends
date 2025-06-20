import { useGSAP } from "@gsap/react";
import { HeroBanner } from "@main/main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React from "react";
import * as ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HeroBanner />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: App,
  errorBoundary(err: Error, errInfo: React.ErrorInfo, props: any) {
    console.log(err, errInfo, props);
    return <div></div>;
  },
});

export const { mount, unmount } = lifecycles;
