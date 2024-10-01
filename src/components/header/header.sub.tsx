"use client"
import React, { useEffect, useRef, useState } from 'react'

export default function HeaderSub() {

  return (
    <div className='mt-28 sticky top-10'>
      <div>
       <ul className='flex gap-16' >
        <li>Dịch vụ uy tính</li>
        <li>Bảo mật dữ liệu</li>
        <li>Chất lượng hàng đầu</li>
        <li>Nhanh chóng - Lấy tiền</li>
        <li>Hotline <a href="tel:1900636981">1900.63.69.81</a></li>
       </ul>
      </div>
    </div>
  )
}
