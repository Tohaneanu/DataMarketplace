import "../styles/globals.css";

//INTRNAL IMPORT
import React, { useEffect } from 'react';
import { NavBar, Footer } from "../components/componentsindex";
import { DataMarketplaceProvider } from "../Context/DataMarketplaceContext";
import { useRouter } from "next/router";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
   const router = useRouter();
  useEffect(() => {
    window.addEventListener('ethereum#disconnect', handleDisconnect);
    return () => {
      window.removeEventListener('ethereum#disconnect', handleDisconnect);
    };
  }, []);

  const handleDisconnect = (event) => {
    if (typeof window.ethereum === 'undefined' || window.ethereum.selectedAddress === null) {
      router.push("/")
    }
  };

  return (
    <div>
      <DataMarketplaceProvider>
        <NavBar />
        <Component {...pageProps} />
        <ToastContainer theme="dark"  autoClose= "2000" position= "bottom-right"/>
        <Footer />
      </DataMarketplaceProvider>
    </div>
  );
}

export default MyApp;
