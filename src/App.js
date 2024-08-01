import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Layouts
import RootLayout from "./layout/RootLayout";

// Pages
import LandingPage from "./pages/LandingPage";
import Login from "./pages/auth/Login";

import ProtectedRoutes from "./ProtectedRoutes";
import Home from "./pages/protected/Home";

import NotFound from "./pages/NotFound";
import PrivateLayout from "./layout/PrivateLayout";
import LandingLayout from "./layout/LandingLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<LandingPage />} />
      </Route>

      <Route path="login" element={<Login />} />

      <Route path="/private" element={<ProtectedRoutes />} />

      <Route path="/home" element={<PrivateLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
