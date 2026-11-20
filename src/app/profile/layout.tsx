"use client"

import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import { ImageTypeProvider } from './imagetypecontext'

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <ImageTypeProvider>
      <div className="h-screen flex flex-col">
        {pathname !== "/profile" && <Navbar />}
        <main className="neg-z">{children}</main>
      </div>
    </ImageTypeProvider>
  );
}
