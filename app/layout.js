import localFont from "next/font/local";
import "./globals.css";
import { Sacramento } from 'next/font/google'
 
const SacramentoFont = Sacramento({
  weight: '400',
  subsets: ['latin'],
})
 
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Feliz cumpleaños!",
  description: "Para mi niña hermosa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${SacramentoFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
