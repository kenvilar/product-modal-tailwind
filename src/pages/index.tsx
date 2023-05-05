import Image from "next/image";
import { Inter } from "next/font/google";
import ModalImage from "@/pages/components/ModalImage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-slate-100">
        <div className="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
          <ModalImage />
        </div>
      </div>
    </>
  );
}
