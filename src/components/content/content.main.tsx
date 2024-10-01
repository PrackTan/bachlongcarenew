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
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function MainContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const services = [
    "Sửa Điện Thoại",
    "Sửa Tablet",
    "Sửa Đồng Hồ",
    "Sửa MacBook",
    "Sửa Airpords",
    "Phụ Kiện",
    "Tin Công Nghệ",
    "Thu Cũ Đổi Mới",
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
      {/* Header */}
      {/* <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold">CareCenter.vn</h1>
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="text" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                    <nav className="flex flex-col space-y-4">
                    {services.map((service, index) => (
                        <a key={index} href="#" className="flex items-center space-x-2 text-lg">
                        <span>{service}</span>
                        </a>
                    ))}
                    </nav>
                </SheetContent>
                </Sheet>
            </div>
            <div className="hidden lg:flex flex-1 max-w-xl mx-4">
                <div className="relative w-full">
                <Input
                    type="text"
                    placeholder="Bạn muốn tìm gì..."
                    className="w-full py-2 px-4 rounded text-black"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" />
                </div>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
                <Button variant="text" className="flex items-center">
                <Calendar className="mr-2" />
                Đặt Lịch
                </Button>
                <Button variant="text" className="flex items-center">
                <ShoppingCart className="mr-2" />
                <span className="bg-yellow-400 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center">0</span>
                </Button>
            </div>
            </div>
        </header> */}

      {/* Service Icons */}
      {/* <div className="bg-white py-4 overflow-x-auto">
        <div className="container mx-auto flex justify-between min-w-max px-4">
          {['Dịch Vụ Uy Tín', 'Bảo Mật Dữ Liệu', 'Chất Lượng Hàng Đầu', 'Nhanh Chóng - Lấy Liền', 'Hotline: 1900 8174'].map((item, index) => (
            <div key={index} className="flex items-center mx-2">
              <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div> */}

      {/* Main Content */}
      <main className="container mx-auto mt-8 px-4 lg:flex">
        {/* Sidebar - Hidden on mobile, shown on larger screens */}
        <aside className="hidden lg:block lg:w-1/4 pr-8">
          <h2 className="font-bold text-lg mb-4">Danh mục dịch vụ</h2>
          <ul className="space-y-2">
            {services.map((service, index) => (
              <li key={index} className="flex items-center">
                <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
                <span>{service}</span>
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
            <Carousel dots infinite>
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          </div>
        </div>
      </main>

      {/* Product Categories */}
      <div className="container mx-auto mt-12 px-4">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {[
            "Sửa Điện Thoại",
            "Sửa Tablet",
            "Sửa Đồng Hồ",
            "Sửa Airpods",
            "Sửa Macbook",
            "Phụ Kiện Chính Hãng",
            "Thu Cũ Đổi Mới",
            "Khuyến Mãi Hot",
          ].map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-2"></div>
              <span className="text-center text-sm">{category}</span>
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
    </div>
  );
}
