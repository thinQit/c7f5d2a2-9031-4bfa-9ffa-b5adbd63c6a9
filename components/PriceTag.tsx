"use client";

interface PriceTagProps {
  price?: number
  compareAt?: number
}

export default function PriceTag({
  price = 0,
  compareAt = 0,
}: Partial<PriceTagProps>) {
  const discount = compareAt > price ? Math.round(((compareAt - price) / compareAt) * 100) : 0

  return (
    <div className="flex items-center gap-2">
      <span className="text-lg font-bold text-[#1A1A2E]">${price.toFixed(2)}</span>
      {compareAt > price && <span className="text-sm text-muted-foreground line-through">${compareAt.toFixed(2)}</span>}
      {discount > 0 && <span className="rounded bg-[#E63946]/10 px-2 py-1 text-xs font-semibold text-[#E63946]">-{discount}%</span>}
    </div>
  )
}
