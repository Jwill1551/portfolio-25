import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

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
  title: "Joshua Williams | Fullstack Developer",
  description: "Created using ReactJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}

        <script src="./jquery-3.7.1.min.js" async></script>
        <script src="./slick.min.js" async></script>
      </body>
    </html>
  );
}
