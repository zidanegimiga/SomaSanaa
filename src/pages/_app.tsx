import { FC } from "react";
import { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import Script from "next/script";
import "../styles/index.scss";

const App: FC = ({ Component, pageProps }: AppProps) => {
  const measurementID = "G-1JQZZ8NPTL"
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-1JQZZ8NPTL" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1JQZZ8NPTL');
        `}        
      </Script>
      <Component {...pageProps} />
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
    </>
  );
};
export default App;
