import { useEffect, useRef } from "react";

const useTradingViewWidget = ({
  scriptURL,
  config,
  height = 600,
}: {
  scriptURL: string;
  config: Record<string, unknown>;
  height: number;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (containerRef.current.dataset.loaded) return;
    containerRef.current.innerHTML = `<div class="tradingview-widget-container__widget" style="height:${height}px;width:100%"></div>`;
    const script = document.createElement("script");
    script.src = scriptURL;
    script.async = true;
    script.innerHTML = JSON.stringify(config);

    containerRef.current.appendChild(script);
    containerRef.current.dataset.loaded = "true";

    const currentContainer = containerRef.current;

    return () => {
      if (currentContainer) {
        currentContainer.innerHTML = "";
        delete currentContainer.dataset.loaded;
      }
    };
  }, [scriptURL, config, height]);
  return containerRef;
};

export default useTradingViewWidget;
