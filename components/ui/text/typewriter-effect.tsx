"use client";
import * as React from "react";

export function TypewriterEffect({ children, className, ...props }: any) {
  return React.createElement("div", { className: className, ...props }, children);
}

