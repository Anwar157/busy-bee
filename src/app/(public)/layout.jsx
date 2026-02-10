import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

export default function PublicLayout({ children }) {
  return (
    <>
      <header className="py-2 w-full">
        <Navbar />
      </header>

      <main className="py-2 md:w-11/12 mx-auto ">{children}</main>

      <footer className="py-2 md:w-11/12 mx-auto">
        <Footer />
      </footer>
    </>
  );
}
