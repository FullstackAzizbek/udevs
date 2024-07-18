// import Footer from "@/components/footer";
import { DataProvider } from "@/context/context";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </DataProvider>
  );
}
