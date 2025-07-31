// pages/_app.tsx
import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "@/store/store"; // Import the Redux store

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}> {/* Wrap with Redux Provider */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}