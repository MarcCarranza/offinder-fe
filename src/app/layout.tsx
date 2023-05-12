// Dependencies
import { Inter } from "next/font/google";

// Component
import Nav from "../Components/Nav/Nav";

// Style
import "./globals.css";
import NavProvider from "../Context/NavProvider";

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
      <NavProvider>
        <body className={inter.className}>
          {children}
          <Nav />
        </body>
      </NavProvider>
    </html>
  );
}
