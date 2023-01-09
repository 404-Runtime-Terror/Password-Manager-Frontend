import "../styles/globals.css";
import Head from "next/head";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CRED}>
        <Head>
          <title>Password Manager</title>
          <meta
            name="description"
            content="Keep your passwords safe and organized with our password manager frontend app. Sign up now and enjoy convenient, secure password management."
          />
          <meta
            name="keywords"
            content="password manager, frontend, security, web app, passwords"
          />
          <meta name="author" content="RunTime-Terror" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="canonical"
            href="https://password-manager-frontend.vercel.app/"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://password-manager-frontend.vercel.app/"
          />
          <meta property="og:title" content="Password Manager Frontend" />
          <meta
            property="og:description"
            content="Keep your passwords safe and organized with our password manager frontend app. Sign up now and enjoy convenient, secure password management."
          />
          <meta
            property="og:image"
            content="https://password-manager-frontend.vercel.app/images/logo.png"
          />
          <link rel="icon" href="/blackhole.gif" />
        </Head>
        <Component {...pageProps} />
      </GoogleOAuthProvider>
    </>
  );
}
