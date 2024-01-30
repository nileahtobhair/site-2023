import "../styles/globals.css";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  // For the inquistive among us
  useEffect(() => {
    console.log(
      "This site is built using nextjs and uses beam analytics. Checkout out the source at https://github.com/nileahtobhair/site-2023"
    );
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <script
        src="https://beamanalytics.b-cdn.net/beam.min.js"
        data-token="030d1f70-c75c-4fde-b70b-32d40bb534a4"
        async
      ></script>
    </>
  );
}
