"use client"

import "../globals.css";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import { ImageTypeProvider } from './imagetypecontext'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <ImageTypeProvider>
      <div className="h-screen flex flex-col">
        {pathname !== "/profile" && <Navbar />}
        <div className="neg-z">{children}</div>
      </div>
    </ImageTypeProvider>
  );
}
