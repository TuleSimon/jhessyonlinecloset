import '../styles/globals.scss'
import "tailwindcss/tailwind.css";
import { Layout, Loader } from '../components';
import Router from "next/router"
import { useState } from 'react';



function MyApp({ Component, pageProps }) {

const [loading, setLoading] = useState(false)

  Router.onRouteChangeStart = url => {
    setLoading(true)
  }
  
  Router.onRouteChangeComplete = () =>    setLoading(false)
  
  Router.onRouteChangeError = () =>    setLoading(false)

return <Layout>
     <Component {...pageProps} />
     {loading && <Loader/>}
     </Layout>
}

export default MyApp
