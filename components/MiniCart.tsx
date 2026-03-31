'use client'

import Image from 'next/image'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CartItem {
  id: string
  name: string
  price: string
  qty: number
  imageSrc: string
}

interface MiniCartProps {
  open?: boolean
  onClose?: () => void
  items?: CartItem[]
  subtotal?: string
}

export default function MiniCart({
  open = false,
  onClose = () => {},
  subtotal = '$158.00',
  items = [
    {
      id: '1',
      name: 'Wireless Headphones',
      price: '$99.00',
      qty: 1,
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577110/site-images/ecommerce/17485350.jpg',
    },
  ],
}: Partial<MiniCartProps>) {
  return <div />
}
