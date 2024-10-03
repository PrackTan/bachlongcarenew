import Image from 'next/image'
import React from 'react'
import banner1 from "../../../public/img/banner1.png"
import banner2 from "../../../public/img/banner2.jpg"
export default function Banner() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-2 mb-4">
        {[
        {
          img:banner1
        },
        {
          img:banner2
        }
      ].map((price, index) => (
          <div key={index} className="bg-blue-100 p-2 rounded flex items-center justify-between truncate">
            <Image src={price.img} width={1000} height={1000} alt="Product" className="rounded w-full transform hover:scale-110 transition duration-300 ease-in-out" />
            {/* <span className="text-blue-600 font-bold">{price}K</span> */}
          </div>
        ))}
      </div>
    </div>
  )
}
