import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Logo } from "@/components/Logo";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col justify-between">
          <div className="border-b-2 border-slate-300/50
            flex flex-row justify-between">
            <div className="m-2 items-center flex flex-row">
              <Logo></Logo>
              <div className="w-4"></div>
              <NavBar items={[
                // { title: 'Homo', url: '/' },
                { title: '品鑑', url: '/taste' },
                { title: '素材', url: '/material' }
              ]}></NavBar>
            </div>
            <div className="m-2 items-center flex flex-row">
              <NavBar items={[
                // { title: 'Homo', url: '/' },
                { title: 'You', url: '/user' },
                { title: 'Me', url: '/me' }
              ]}></NavBar>
            </div>
          </div>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
