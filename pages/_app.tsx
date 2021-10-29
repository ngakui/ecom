import '../styles/globals.scss'
import type { AppProps } from 'next/app'
// import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
    </div>
      )
}
export default MyApp
