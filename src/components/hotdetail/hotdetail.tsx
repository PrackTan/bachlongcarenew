import Image from 'next/image'
import React from 'react'
import { CgShoppingCart } from 'react-icons/cg'

export default function HotDetail() {
  return (
    <div>
      {/* Hot deals today */}
      <div className="bg-pink-100 p-4 rounded-lg mb-4">
        <h2 className="text-lg font-bold mb-2">Hot deals today 🔥</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="bg-white p-2 rounded shadow">
              <Image src="/placeholder.svg" width={100} height={100} alt="Product" className="w-full h-auto mb-2" />
              <p className="text-sm mb-1 line-clamp-2">iPhone 12 Pro Max Case</p>
              <div className="flex justify-between items-center">
                <span className="text-red-500 font-bold">900.000đ</span>
                <button className="bg-blue-500 text-white p-1 rounded">
                  <CgShoppingCart size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
