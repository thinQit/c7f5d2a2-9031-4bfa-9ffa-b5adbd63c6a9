"use client";
export function TypewriterEffect({ words, className, cursorClassName }: any) {
  if (!words || !Array.isArray(words)) return null;
  return (
    <h1 className={className}>
      {words.map((w: any, i: number) => (
        <span key={i}>{w.text}{i < words.length - 1 ? " " : ""}</span>
      ))}
    </h1>
  );
}