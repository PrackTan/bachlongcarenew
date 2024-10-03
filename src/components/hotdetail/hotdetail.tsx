import Image from 'next/image'
import React from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import sp1 from "../../../public/img/thaymanhinhjkip14plus.png"
import sp2 from "../../../public/img/thaymanhinhjkip14.png"
import sp3 from "../../../public/img/thaymanhinhjkip13pro.png"
import sp4 from "../../../public/img/thaymanhinhjkip12promax.png"
import sp5 from "../../../public/img/thaymanhinhjkip12.png"
const data = [
{
  title:"Thay màn hình JK iPhone 14 Plus",
  img:sp1,
  originprice:3875000,
  pricesale:3100000
},
{
  title:"Thay màn hình JK iPhone 14",
  img:sp2,
  originprice:3750000,
  pricesale:3000000
},
{
  title:"Thay màn hình JK iPhone 13 Pro",
  img:sp3,
  originprice:4000000,
  pricesale:2800000
},
{
  title:"Thay màn hình JK iPhone 12 Pro max",
  img:sp4,
  originprice:4700000,
  pricesale:2350000
},
{
  title:"Thay màn hình JK iPhone 12",
  img:sp5,
  originprice:2500000,
  pricesale:1750000
},
{
  title:"Thay màn hình JK iPhone 14 Plus",
  img:sp1,
  originprice:3875000,
  pricesale:3100000
},
{
  title:"Thay màn hình JK iPhone 14",
  img:sp2,
  originprice:3750000,
  pricesale:3000000
},
{
  title:"Thay màn hình JK iPhone 13 Pro",
  img:sp3,
  originprice:4000000,
  pricesale:2800000
},
{
  title:"Thay màn hình JK iPhone 12 Pro max",
  img:sp4,
  originprice:4700000,
  pricesale:2350000
},
{
  title:"Thay màn hình JK iPhone 12",
  img:sp5,
  originprice:2500000,
  pricesale:1750000
},
]
export default function HotDetail(props:any) {
  return (
    <div>
      {/* Hot deals today */}
      <div className={`bg-pink-100 p-4 rounded-lg mb-4`}>
        <h2 className="text-lg font-bold mb-2">Sản phẩm bán chạy 🔥</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {data.map((item, index) => (
            <div key={index} className="bg-white p-2 rounded shadow overflow-hidden">
              <Image src={item.img} width={300} height={500} alt="Product" className="w-full h-auto mb-2 transform hover:scale-110 transition duration-300 ease-in-out"  />
              <p className="text-sm mb-1 line-clamp-2">{item.title}</p>
              <div className="flex justify-evenly items-center">
                <span className="text-red-500 font-bold">{item.pricesale.toLocaleString()}đ</span>
                <span className="text-gray-300 font-bold line-through">{item.originprice.toLocaleString()}đ</span>
                <button className="bg-blue-500 text-white p-1 rounded">
                  <CgShoppingCart size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`bg-blue-100 p-4 rounded-lg mb-4`}>
        <h2 className="text-lg font-bold mb-2">Hot deals today 🔥</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {data.map((item, index) => (
            <div key={index} className="bg-white p-2 rounded shadow overflow-hidden">
              <Image src={item.img} width={300} height={500} alt="Product" className="w-full h-auto mb-2 transform hover:scale-110 transition duration-300 ease-in-out"  />
              <p className="text-sm mb-1 line-clamp-2">{item.title}</p>
              <div className="flex justify-between items-center">
              <span className="text-red-500 font-bold">{item.pricesale.toLocaleString()}đ</span>
              <span className="text-gray-300 font-bold line-through">{item.originprice.toLocaleString()}đ</span>
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
