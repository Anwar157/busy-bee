import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Busy Bee",
  description: "Microtask platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <AuthProvider>
          <main className="py-2 md:w-11/12 mx-auto">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
