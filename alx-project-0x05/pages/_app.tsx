// pages/_app.tsx
import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CountProvider } from "@/context/CountContext"; // Import CountProvider

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CountProvider> {/* Wrap with CountProvider for global state */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CountProvider>
  );
}