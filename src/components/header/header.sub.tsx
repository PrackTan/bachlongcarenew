"use client"
import React, { useEffect, useState } from 'react'

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