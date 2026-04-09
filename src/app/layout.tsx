import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const sfPro = localFont({
  src: [
    {
      path: './fonts/SF-Pro-Display-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SF-Pro-Display-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: "PPA - Master Focus and Get More Done in Less Time",
  description: "Master Focus and Get More Done in Less Time",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className={`${sfPro.className} antialiased`}>{children}</body>
    </html>
  );
}
