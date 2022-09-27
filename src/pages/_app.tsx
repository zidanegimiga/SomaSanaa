import { FC } from "react";
import { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import "../styles/index.scss";

const App: FC = ({ Component, pageProps }: AppProps) => {
  return (
    <>
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
