import type { Metadata, Viewport } from "next";
import { Inter, Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";

// Load Google Fonts dynamically for self-hosting optimization
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-thai",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#6B4F3A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "บ้านจิ๋วหลิว | หอพักสตรี ใกล้ MRT ภาษีเจริญ เพียง 100 เมตร",
  description: "หอพักสตรีสไตล์มินิมอลคาเฟ่ บ้านจิ๋วหลิว (Baan Jiw Liu) อุ่นใจ ปลอดภัย มีความเป็นส่วนตัวสูง ใกล้ MRT ภาษีเจริญ 100 ม. ซีคอน บางแค และตึกธนาคาร UOB เริ่มต้น 5,000 บาท/เดือน หิ้วกระเป๋าเข้าอยู่ได้เลย",
  keywords: [
    "บ้านจิ๋วหลิว",
    "หอพักสตรี ภาษีเจริญ",
    "หอพักหญิง บางแค",
    "หอพักใกล้ MRT ภาษีเจริญ",
    "อพาร์ทเม้นท์หญิง บางแค",
    "ห้องพักสตรี เพชรเกษม",
    "หอพักสตรี ปลอดภัย",
    "หอพักสตรี ใกล้ซีคอนบางแค",
    "หอพักสตรี ใกล้ UOB บางแค",
  ],
  authors: [{ name: "บ้านจิ๋วหลิว" }],
  openGraph: {
    title: "บ้านจิ๋วหลิว | หอพักสตรี ใกล้ MRT ภาษีเจริญ เพียง 100 เมตร",
    description: "หอพักสตรีสไตล์มินิมอลคาเฟ่ อุ่นใจ ปลอดภัย เดินทางสะดวก ใกล้รถไฟฟ้าและห้างสรรพสินค้า เริ่มต้น 5,000 บาท/เดือน",
    type: "website",
    locale: "th_TH",
    siteName: "บ้านจิ๋วหลิว",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${inter.variable} ${prompt.variable} scroll-smooth`}>
      <body className="font-thai antialiased text-[#4A3E3D] bg-white selection:bg-[#C8A97E]/20">
        {/* Sticky Header Navbar */}
        <Navbar />

        {/* Dynamic Pages Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating LINE chat shortcut */}
        <FloatingLine />
      </body>
    </html>
  );
}
