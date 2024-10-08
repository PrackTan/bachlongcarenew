"use client"
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
import { CgShoppingCart } from 'react-icons/cg'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

const categories = ['All', 'Battery', 'Screen', 'Camera', 'Charging Port']

export default function Product(props:any) {
    const {title,products} = props
    const [currentSlide, setCurrentSlide] = useState(0)
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(products.length / 4))
      }
    
      const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + Math.ceil(products.length / 4)) % Math.ceil(products.length / 4))
      }
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <Tabs defaultValue="All" className="w-full">
          <TabsList className="mb-4">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="px-4 py-2">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="relative">
                <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10">
                  <BiChevronLeft size={24} />
                </button>
                <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10">
                  <BiChevronRight size={24} />
                </button>
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-300 ease-in-out" 
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {products.map((product:any, index:number) => (
                      <div key={index} className="flex-none w-1/5 p-2">
                        <div className="bg-white p-2 rounded shadow border">
                          <Image src={product.img} width={500} height={500} alt="Product" className="w-full h-auto mb-2" />
                          <p className="text-sm mb-1 line-clamp-2">{product.name}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-red-500 font-bold">{product.price}</span>
                            <button className="bg-blue-500 text-white p-1 rounded">
                              <CgShoppingCart size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
