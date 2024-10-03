"use client"
import React, { useEffect, useState } from 'react'
import  Image  from 'next/image';
import uytinh from '../../../public/img/uytin.png'
import chatluong from '../../../public/img/chatluong.png'
import nhanh from '../../../public/img/nhanh.png'
import callcenter from '../../../public/img/callcenter.png'
import baomat from '../../../public/img/baomat.png'
export default function HeaderSub() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className='' style={{
      padding: scrolled ? "0px" : "20px 0px",
      transition: "padding 0.3s ease-in-out"
    }}>
      {/* mt-28 sticky top-10 */}
      <div>
        <ul className='flex gap-16 bg-[#003c77] p-2 rounded text-white' >
          <li className='flex justify-center items-center'>
            <Image src={uytinh} alt='Uy tín' height={50} width={50}  />
            <span>Dịch vụ uy tín </span>
          </li>
          <li className='flex justify-center items-center'>
            <Image src={chatluong} alt='Bảo mật' height={50} width={50}  />
            <span>Bảo mật dữ liệu</span>
          </li>
          <li className='flex justify-center items-center'>
            <Image src={baomat} alt='Chất lượng' height={50} width={50}  />
            <span>Chất lượng hàng đầu</span>
          </li>
          <li className='flex justify-center items-center'>
            <Image src={nhanh} alt='Nhanh chóng - Lấy tiền' height={50} width={50}  />
            <span>Nhanh chóng - Lấy tiền</span>
          </li>
          <li className='flex justify-center items-center'>
            <Image src={callcenter} alt='Hotline' height={50} width={50}  />
            <span>Hotline <a href="tel:1900636981">1900.63.69.81</a></span>
          </li>
        </ul>
      </div>
    </div>
  )
}