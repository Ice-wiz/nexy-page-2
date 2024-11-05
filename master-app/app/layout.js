import localFont from "next/font/local";
import "./globals.css";
import { VWOScript } from "npm-next-smartcode";


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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <VWOScript 
          accountId="955578"  // Replace with your actual VWO account ID
          type="ASYNC"  // or "OSC" depending on your needs
          settingsTimeout={2000}  // Optional: default is 2000
          hideElement=""      // Optional: default is 'body'
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}