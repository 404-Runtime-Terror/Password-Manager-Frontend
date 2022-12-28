import Head from "next/head";
import { useState } from "react";
import Login from "../components/login";
import Navbar from "../components/Navbar";
import Signup from "../Components/SignUp";

export default function Home() {
  const [isLoginPage, setisLoginPage] = useState(true);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />

        {/* if else statement: if isLoginPage is true then show login component else show signup component */}
        {isLoginPage ? (
          <Login setisLoginPage={setisLoginPage} />
        ) : (
          <Signup setisLoginPage={setisLoginPage} />
        )}
      </main>
    </>
  );
}
