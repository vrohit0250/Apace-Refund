import { GlobalStyles } from '@bigcommerce/big-design';
import type { AppProps } from 'next/app';
// import "./dashboard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <GlobalStyles />
        <Component {...pageProps} />
    </>
);

export default MyApp;
