import { Inter, Inter_Tight } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${inter.variable} ${interTight.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
