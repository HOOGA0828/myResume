import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "鄭韋新｜前端工程師履歷與作品集",
  description: "鄭韋新的前端工程師履歷與作品集：以 React、TypeScript、AI Agent 與產品思維，完成從介面到上線的數位產品。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
