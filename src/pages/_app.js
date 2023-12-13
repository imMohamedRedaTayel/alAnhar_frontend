import Footer from '@/components/tmp/footer'
import Header from '@/components/tmp/header'
import '@/styles/globals.scss'
import { appWithTranslation } from "next-i18next";


const App = ({ Component, pageProps }) => {
  return <>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </> 
}

export default appWithTranslation(App);
