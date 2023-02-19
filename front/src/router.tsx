import React, { ReactNode } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";

import { Feed, Calendar, Donation } from "./Pages";
import { NotFound } from "./Components";
import App from "./App";

const component: ReactNode = (
  <div>
    <h1>Hello World</h1>
    <Link to="about">About Us</Link>
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "feed",
        element: <Feed></Feed>,
      },
      {
        path: "calendar",
        element: <Calendar></Calendar>,
      },
      {
        path: "donation",
        element: <Donation></Donation>,
      },
    ],
  },
]);

export const routerFromElements = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={component}>
      <Route
        path="feed"
        // action={todosAction}
        // loader={todosLoader}
        element={<Feed />}
        errorElement={<NotFound />}
      ></Route>
      <Route path="notFound" element={<NotFound />} />
    </Route>
  )
);
