import MainContent from "@/components/content/content.main";
import HeaderMain from "@/components/header/header.main";
import HeaderSub from "@/components/header/header.sub";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center relative items-center container mx-auto">
      <div className="flex flex-col w-full justify-center items-center fixed top-0 z-50">
        <HeaderMain />
        <HeaderSub />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between pt-11 mt-28">
        <MainContent/>
      </main>
    </div>
  );
}
