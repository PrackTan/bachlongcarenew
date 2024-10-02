import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
        {[420, 109, 69, 159].map((price, index) => (
          <div key={index} className="bg-blue-100 p-2 rounded flex items-center justify-between">
            <Image src="/placeholder.svg" width={50} height={50} alt="Product" className="rounded" />
            <span className="text-blue-600 font-bold">{price}K</span>
          </div>
        ))}
      </div>
    </div>
  )
}
