import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import "./tailwind.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";

export const metadata = {
  title: "Sign Upp - World Worst Sign Up Process",
  description:
    "Want to waste your time? Sign Upp is the perfect place for you!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-[#f8eeee] ")}>
        <Header />
        {children}
      </body>
    </html>
  );
}
