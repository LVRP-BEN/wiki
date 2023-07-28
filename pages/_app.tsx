import { Montserrat } from "@next/font/google";

const MontSerrat = Montserrat({subsets: ["latin"]});

export default function MyApp({ Component, pageProps }) {
    return (
        <main className={MontSerrat.className}>
            <Component {...pageProps} />
        </main>
    );
}