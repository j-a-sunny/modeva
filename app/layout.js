import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import "./globals.css";
import { Lato, Playfair_Display } from "next/font/google";

const primeFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-playfair",
  display: "swap", // Recommended for better font loading
});
const secondFont = Lato({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-lato",
  display: "swap", // Recommended for better font loading
});

export const metadata = {
  title: "Modeva",
  description: "Discover the Art of Dressing Up",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${primeFont.variable} ${secondFont.variable} antialiased`}
      >
          
        <header className="fixed top-0 inset-x-0 bg-light-gray">
          <Navbar />
        </header>
        {children}
        <footer className="">footer</footer>
      </body>
    </html>
  );
}
