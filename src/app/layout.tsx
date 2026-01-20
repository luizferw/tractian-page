import "../styles/globals.css";
import fontsVariables from "@/styles/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={fontsVariables}>
      <body>{children}</body>
    </html>
  );
}
