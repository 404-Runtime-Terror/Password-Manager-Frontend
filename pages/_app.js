/* 
  This file is used to import global CSS files and other things that you want to be rendered on every page of your site.
  You can read more about this file here: https://nextjs.org/docs/advanced-features/custom-app
*/

// This is the default Next.js file that is used to import global CSS files and other things that you want to be rendered on every page of your site.
import "../styles/globals.css";

// Import the components you want to render on every page of your site
import Head from "next/head";

// Import the GoogleOAuthProvider component from the react-oauth package
import { GoogleOAuthProvider } from "@react-oauth/google";

// This is the default Next.js function that is used to render the app
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* // This is the GoogleOAuthProvider component from the react-oauth package. It is used to authenticate users with Google OAuth. */}
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CRED}>
        {/* // This is the component that is rendered on every page of your site. */}
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
          <meta property="og:image" content="/logo.png" />
          <link rel="icon" href="/logo.png" />
        </Head>

        {/* // This is the component that is rendered on every page of your site. */}
        <Component {...pageProps} />
      </GoogleOAuthProvider>
    </>
  );
}
