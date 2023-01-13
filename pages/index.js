/* This is the page that is rendered when you go to the root of the site
    (i.e. http://localhost:3000/). It is a good place to put your login page
    or other pages that you want to be the first thing a user sees when they
    go to your site.

    You can also use this page to render other components, such as a navbar
    or footer, that you want to appear on every page of your site.

    You can read more about pages here: https://nextjs.org/docs/basic-features/pages

    You can read more about React components here: https://reactjs.org/docs/components-and-props.html

    You can read more about React fragments here: https://reactjs.org/docs/fragments.html
    
*/

// Import the components you want to render on this page
import LoginPage from "./components/Pages/LoginPage";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <LoginPage />
      </main>
    </>
  );
}
