"use client";
import { useState } from "react";
import { Button } from "antd";
// import { Search, Menu, Calendar, ShoppingCart, Phone, ChevronRight } from 'lucide-react'
import { IoSearchSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { Carousel } from "antd";
import "./contentStyle.css"
import iconlaptop from "../../../public/img/icon-laptop.webp";
import iconnews from "../../../public/img/icon-news.webp";
import iconphone from "../../../public/img/icon-phone.webp";
import iconsound from "../../../public/img/icon-sound.webp";
import iconwatch from "../../../public/img/icon-watch.webp";
import icontablet from "../../../public/img/icon-tablet.webp";

import laptop from "../../../public/img/dnahmuc-laptop.webp";
import promotion from "../../../public/img/danhmuc-promotion.webp";
import phone from "../../../public/img/danhmuc-phone.webp";
import sound from "../../../public/img/danhmuc-sound.webp";
import watch from "../../../public/img/danhmuc-watch.webp";
import tablet from "../../../public/img/danhmuc-tablet.webp";
import Image from "next/image";
import Banner from "../banner/banner";
import HotDetail from "../hotdetail/hotdetail";
import Product from "../product/product";

import banner1 from "../../../public/img/1200x450-sua-airpods-thang-10.jpg";
import banner2 from "../../../public/img/1200x450-sua-macbook-thang-10.jpg";
import banner3 from "../../../public/img/1200x450-thay-man-hinh-thang-10.jpg";

import phone1 from "../../../public/img/pin-orizin-ip-13-13-pro-moi-hinh-nhat-2024.jpg";
import phone2 from "../../../public/img/pin-orizin-maximum-iphone-11-pro-max-2024-768x768 (1).png";
import phone3 from "../../../public/img/pin-orizin-maximum-iphone-11-pro-max-2024-768x768.png";
import phone4 from "../../../public/img/pin-orizin-maximum-iphone-11-pro-2024-768x768.png";
import phone5 from "../../../public/img/pin-orizin-maximum-iphone-12-pro-max-2024-768x768.png";
import appleWatchPin1 from "../../../public/img/apple-watch-s4-kinh.jpg";
import appleWatchPin2 from "../../../public/img/apple-watch-s5-kinh.jpg";
import appleWatchPin3 from "../../../public/img/apple-watch-s6-kinh.jpg";
import appleWatchPin4 from "../../../public/img/apple-watch-s7-kinh.jpg";
import appleWatchPin5 from "../../../public/img/apple-watch-se-kinh.jpg";
import ipad from "../../../public/img/pin-orizin-ipad-11-gen-2-768x768.png";
import ipad2 from "../../../public/img/pin-orizin-ipad-11-gen-3-768x768.png";
import ipad3 from "../../../public/img/pin-orizin-ipad-12-9-gen-2-768x768.png";
import ipad4 from "../../../public/img/pin-orizin-ipad-12-9-gen-3-768x768.png";
import ipad5 from "../../../public/img/pin-orizin-ipad-air-10-9-768x768.png";
import laptop1 from "../../../public/img/laptop-ASUS-Zen-Book-UX430.jpg";
import laptop2  from "../../../public/img/laptop-ASUS-Zen-Book-UX430.jpg";
import laptop3  from "../../../public/img/laptop-Dell-Vostro-3458.jpg";
import laptop4  from "../../../public/img/laptop-HP-Envy-14-AL.jpg";
import laptop5  from "../../../public/img/laptop-Lenovo-ThinkPad-T420S.jpg";



import { BiLeftArrow, BiRightArrow } from "react-icons/bi";




const products = {
    phone: [
      { 
        name: 'iPhone 13 Pro Battery', 
        price: '1.100.000đ',
        img: phone1
      },
      { name: 'iPhone 12 Screen', price: '1.200.000đ', img: phone2 },
      { name: 'Samsung S21 Camera', price: '900.000đ', img: phone3 },
      { name: 'Google Pixel 6 Charging Port', price: '800.000đ', img: phone4 },
      { name: 'OnePlus 9 Battery', price: '950.000đ', img: phone5 },
      { name: 'Xiaomi Mi 11 Screen', price: '1.050.000đ', img: phone1 },
    ],
    airpods: [
      { name: 'AirPods Pro 2nd Gen Case', price: '800.000đ', img: sound },
      { name: 'AirPods 3rd Gen Battery', price: '600.000đ', img: sound },
      { name: 'AirPods Max Ear Cushions', price: '1.200.000đ', img: sound },
      { name: 'AirPods 2nd Gen Charging Case', price: '500.000đ', img: sound },
    ],
    ipad: [
      { name: 'iPad Pro 12.9" Screen', price: '3.500.000đ', img: ipad },
      { name: 'iPad Air 4 Battery', price: '1.800.000đ', img: ipad2 },
      { name: 'iPad Mini 6 Charging Port', price: '900.000đ', img: ipad3 },
      { name: 'iPad 8th Gen Home Button', price: '700.000đ', img: ipad4 },
      { name: 'iPad 9th Gen Screen', price: '2.200.000đ', img: ipad5 },
    ],
    laptop: [
      { name: 'MacBook Pro 16" Battery', price: '2.500.000đ', img: laptop1 },
      { name: 'MacBook Air M1 Screen', price: '4.000.000đ', img: laptop2 },
      { name: 'MacBook Pro 13" Keyboard', price: '1.800.000đ', img: laptop3 },
      { name: 'MacBook Air M2 Trackpad', price: '1.500.000đ', img: laptop4 },
      { name: 'MacBook Pro 14" Display', price: '5.000.000đ', img: laptop5 },
    ],
    appleWatch: [
      { name: 'Apple Watch Series 7 Screen', price: '2.000.000đ', img: appleWatchPin1 },
      { name: 'Apple Watch SE Battery', price: '800.000đ', img: appleWatchPin2 },
      { name: 'Apple Watch Series 6 Crown', price: '600.000đ', img: appleWatchPin3 },
      { name: 'Apple Watch Series 5 Strap', price: '400.000đ', img: appleWatchPin4 },
      { name: 'Apple Watch Series 4 Sensor', price: '1.000.000đ', img: appleWatchPin5 },
    ],
}
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  objectFit: "fill",
};
const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
};
const CustomPrevArrow = ({ className, style, onClick }:any) => (
  <div
    className={className}
    style={{ ...style, left: "20px", zIndex: 10, background: "rgba(0,0,0,0.5)", borderRadius: "50%" }}
    onClick={onClick}
  >
    <BiLeftArrow style={{ color: "white", fontSize: "20px" }} />
  </div>
);

const CustomNextArrow = ({ className, style, onClick }:any) => (
  <div
    className={className}
    style={{ ...style, right: "20px", zIndex: 10, background: "rgba(0,0,0,0.5)", borderRadius: "50%" }}
    onClick={onClick}
  >
    <BiRightArrow style={{ color: "white", fontSize: "20px" }} />
  </div>
);
export default function MainContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const services = [
    {
      title: "Sửa Điện Thoại",
      img: iconphone,
    },
    {
      title: "Sửa iPad",
      img: icontablet,
    },
    {
      title: "Sửa Apple Watch",
      img: iconwatch,
    },
    {
      title: "Sửa Airpod",
      img: iconsound,
    },
    {
      title: "Sửa Laptop",
      img: iconlaptop,
    },
    {
      title: "Tin tức",
      img: iconnews,
    },
  ];

  const features = [
    { icon: <IoSearchSharp />, text: "Miễn Phí Chẩn Đoán" },
    { icon: <FaCalendarAlt />, text: "Sửa Nhanh Lấy Liền" },
    { icon: <MdOutlineAddShoppingCart />, text: "Bảo Hành 365 Ngày" },
    { icon: <FaPhoneVolume />, text: "Giá Tốt Cạnh Tranh" },
    { icon: <FaChevronRight />, text: "Kỹ Thuật Kinh Nghiệm" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="container mx-auto mt-8 px-4 lg:flex justify-evenly ">
        {/* Sidebar - Hidden on mobile, shown on larger screens */}
        <aside className="hidden lg:block pr-8 bg-[gainsboro] p-5 rounded">
          <h2 className="font-bold text-lg mb-4">Danh mục dịch vụ</h2>
          <ul className="space-y-2">
            {services.map((service, index) => (
              <li key={index} className="flex items-center">
                <div className="w-6 h-6 rounded-full mr-2">
                  <Image src={service.img} alt={service.title} />
                </div>
                <span>{service.title}</span>
              </li>
            ))}
          </ul>
        </aside>
        {/* Main Banner */}
        <div className="lg:w-3/4">
          <div className="bg-blue-600 text-white  rounded-lg relative overflow-hidden">
            {/* <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Tư vấn miễn phí</h2>
              <p className="text-xl lg:text-2xl mb-6">Không sửa không mất phí!</p>
              <Button className="bg-yellow-400 text-blue-600 hover:bg-yellow-500">
                ĐẶT LỊCH NGAY
              </Button>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gray-300 rounded-tl-full"></div> */}
            <Carousel
              dots
              arrows
              infinite
              autoplay
              draggable
              // prevArrow={<CustomPrevArrow />} // Sử dụng custom prev arrow
              // nextArrow={<CustomNextArrow />}
            >
              <div>
                <h3 style={contentStyle}>
                  <Image
                    style={imageStyle}
                    src={banner1}
                    alt="banner 1"
                    height={1000}
                    width={2000}
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <Image
                    style={imageStyle}
                    src={banner2}
                    alt="banner 2"
                    height={1000}
                    width={2000}
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <Image
                    style={imageStyle}
                    src={banner3}
                    alt="banner 3"
                    height={1000}
                    width={2000}
                  />
                </h3>
              </div>
            </Carousel>
          </div>
        </div>
      </main>

      {/* Product Categories */}
      <div className="container mx-auto mt-12 px-4">
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
          {[
            {
              title: "Sửa Điện Thoại",
              img: phone,
            },
            {
              title: "Sửa iPad",
              img: tablet,
            },
            {
              title: "Sửa Apple Watch",
              img: watch,
            },
            {
              title: "Sửa AirPods",
              img: sound,
            },
            {
              title: "Sửa Laptop",
              img: laptop,
            },
            {
              title: "Khuyến mãi",
              img: promotion,
            },
          ].map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 flex justify-center items-center bg-gray-300 rounded-full mb-2">
                <Image src={category.img} alt={category.title} />
              </div>
              <span className="text-center text-sm">{category.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Service Features */}
      <div className="container mx-auto mt-12 mb-8 px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {features.map((feature, index) => (
            <Button
              key={index}
              variant="outlined"
              className="flex items-center justify-center py-2 px-4 h-auto"
            >
              {/* <feature.icon className="mr-2 h-4 w-4" /> */}
              <span className="text-sm">{feature.text}</span>
            </Button>
          ))}
        </div>
      </div>
      <Banner />
      <HotDetail/>
      <Product title="Sửa điện thoại" products={products.phone} />
      <Product title="Sửa Apple Watch" products={products.appleWatch} />
      <Product title="Sửa iPad" products={products.ipad} />
      {/* <Product title="Sửa AirPods" products={products.airpods} /> */}
      <Product title="Sửa Laptop" products={products.laptop} />
    </div>
  );
}
