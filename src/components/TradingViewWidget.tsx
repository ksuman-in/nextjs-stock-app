"use client";
import useTradingViewWidget from "@/hooks/useTradingViewWidget";
import React, { memo } from "react";
import { cn } from "@/lib/utils";

type TradingViewWidgetProps = {
  title?: string;
  scriptURL: string;
  config: Record<string, unknown>;
  height?: number;
  className?: string;
};

function TradingViewWidget({
  scriptURL,
  config,
  height = 600,
  title,
  className,
}: TradingViewWidgetProps) {
  const container = useTradingViewWidget({ scriptURL, config, height });

  return (
    <div className="w-full p-4 bg-gray-800 rounded-lg shadow-lg">
      {title && (
        <h3 className="mb-4 text-lg font-semibold text-gray-200">{title}</h3>
      )}
      <div
        className={cn("tradingview-widget-container", className)}
        ref={container}
        style={{ height: "100%", width: "100%" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height, width: "100%" }}
        ></div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
