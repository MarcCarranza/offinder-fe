import Header from "../Components/Header/Header";
import Nav from "../Components/Nav/Nav";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Offinder",
  description: "Clashfinder però millor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Nav />
      </body>
    </html>
  );
}
