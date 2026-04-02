'use client'

import { cn } from '@/lib/utils'

interface VariantSelectorProps {
  sizes?: { label: string; disabled?: boolean }[]
  colors?: { label: string; hex: string; disabled?: boolean }[]
  selectedSize?: string
  selectedColor?: string
  onSelectSize?: (size: string) => void
  onSelectColor?: (color: string) => void
}

export default function VariantSelector({
  sizes = [{ label: 'S' }, { label: 'M' }, { label: 'L' }, { label: 'XL', disabled: true }],
  colors = [{ label: 'Black', hex: '#1A1A2E' }, { label: 'Cream', hex: '#F8F9FA' }, { label: 'Coral', hex: '#E63946', disabled: true }],
  selectedSize = 'M',
  selectedColor = 'Black',
  onSelectSize = () => {},
  onSelectColor = () => {},
}: Partial<VariantSelectorProps>) {
  return <div />
}
