import "../styles/globals.css";
import { useEffect,useState } from "react";
import Router from "next/router";
import Loader from "../components/Loader";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  
  const[loading,setLoading]=useState(false);

  Router.events.on('routeChangeStart',(url)=>{
    // alert(url)
    setLoading(true);
})
Router.events.on('routeChangeComplete',(url)=>{
  // alert(url)
  setLoading(false);
})
  
  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);


    
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);
  return (
    <>
    {loading ? <Loader/>
    :
    <Component {...pageProps} />
    }
      
      </>
  );
}

export default MyApp;