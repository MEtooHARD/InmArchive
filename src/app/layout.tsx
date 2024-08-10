"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useState } from "react";
import { IConfig } from '../components/settings';
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const defaultTime = '2024-8-20';

interface ConfigContext {
  options: IConfig;
  setOptions: (value: IConfig) => void;
}

export const Config = createContext<ConfigContext>({
  options: { ID: '', Password: '', Time: Date.parse(defaultTime) },
  setOptions: () => { }
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [config, setConfig] = useState<IConfig>({ ID: '', Password: '', Time: Date.parse(defaultTime) });
  const path = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="p-1 w-full flex flex-row justify-center bg-green-300/50">
          <Link href="/"
            className={`p-1 m-2 text-xl rounded-xl hover:scale-105 duration-100 transform
              ${path === '/' ? "bg-amber-500/60" : "bg-blue-500/40"}`}>
            Home</Link>
          <Link href="/settings"
            className={`p-1 m-2 text-xl rounded-xl hover:scale-105 duration-100 transform
              ${path === '/settings' ? "bg-amber-500/60" : "bg-blue-500/40"}`}>
            Settings</Link>
        </nav>
        <Config.Provider value={{
          options: config,
          setOptions: setConfig
        }}>
          {children}
        </Config.Provider>
      </body>
    </html>
  );
}
