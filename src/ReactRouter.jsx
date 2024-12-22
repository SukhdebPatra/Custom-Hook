import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./ComponentRouter/layout";
import Home from "./ComponentRouter/Home/Home.jsx";
import About from "./ComponentRouter/About/About.jsx";
import Contact from "./ComponentRouter/Contact/Contact";
import { User } from "./ComponentRouter/User/User.jsx";
import Github, { githubInfoLoader } from "./ComponentRouter/Github/Github.jsx";

const ReactRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "user/:userid", element: <User /> },
        { path: "github", loader: githubInfoLoader, element: <Github /> },
        // { path: "github", element: <Github /> },
      ],
    },
  ]);
  //   const router = createBrowserRouter([
  //     createRoutesFromElements(
  //       <Route path="/" element={<Layout />}>
  //         <Route path="" element={<Home />} />
  //         <Route path="about" element={<About />} />
  //         <Route path="contact" element={<Contact />} />
  //       </Route>
  //     ),
  //   ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default ReactRouter;
