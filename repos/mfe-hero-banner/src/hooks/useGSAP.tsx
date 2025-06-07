import { useGSAP as useGS, useGSAPConfig } from "@gsap/react";
import { useEffect, useState } from "react";

interface UseGSAPProps {
  callback: () => void;
  dependencies?: unknown[] | useGSAPConfig;
}

export const useGSAP = (
  callback: UseGSAPProps["callback"],
  dependencies: UseGSAPProps["dependencies"] = { dependencies: [] }
): void => {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const configHook = Array.isArray(dependencies)
    ? { dependencies }
    : {
        ...(dependencies as useGSAPConfig),
        dependencies: (dependencies as useGSAPConfig)?.dependencies || [],
      };

  useGS(
    () => {
      if (!isLoad) return;
      callback();
    },
    { ...configHook, dependencies: [isLoad, ...configHook.dependencies] }
  );

  useEffect(() => {
    window.addEventListener("load", function () {
      setIsLoad(true);
    });
  }, []);
};
