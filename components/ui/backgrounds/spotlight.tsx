"use client";
import * as React from "react";

export function Spotlight({ children, className, ...props }: any) {
  return React.createElement("div", { className: className, ...props }, children);
}

