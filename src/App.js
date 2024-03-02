import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./styles/global.scss";
import HomePage from "./homePage/HomePage";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Start from "./tutorials/pages/Start";
import Complete from "./tutorials/pages/Complete";

const App = () => {
  // const Layout = () => {
  //   return (
  //     <div className="main">
  //       <Navbar />
  //       <div className="container">
  //         <div className="menuContainer">
  //           <Menu />
  //         </div>
  //         <div className="tutorialContainer">
  //           <Outlet />
  //         </div>
  //       </div>
  //       <Footer />
  //     </div>
  //   );
  // };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <HomePage />,
  //   },

  //   {
  //     path: "/tutorial",
  //     element: <Layout />,
  //     children: [
  //       { path: "/start", element: <Start /> },
  //       { path: "/complete", element: <Complete /> },
  //     ],
  //   },
  //   {
  //     path: "/signin",
  //     element: <SignIn />,
  //   },
  //   {
  //     path: "/signup",
  //     element: <SignUp />,
  //   },
  // ]);

  return (
    <div className="App">
      <Router>
        <Navbar />

        <div className="container main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/start"
              element={
                <>
                  <Menu />
                  <Start />
                </>
              }
            />

            <Route
              path="/complete"
              element={
                <>
                  <Menu />
                  <Complete />
                </>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
  // <RouterProvider router={router} />;
};

export default App;
