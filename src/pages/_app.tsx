import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Auth } from "../hooks/auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth>
      <Component {...pageProps} />
      <Toaster />
    </Auth>
  );
}

export default MyApp;
