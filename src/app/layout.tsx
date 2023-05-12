// Dependencies
import { Inter } from "next/font/google";

// Component
import Nav from "../Components/Nav/Nav";

// Style
import "./globals.css";

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
