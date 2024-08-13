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
import Home from "./pages/protected/Home";
import LessonPage from "./pages/protected/LessonPage";
import InstructorPage from "./pages/InstructorPage";
import NotFound from "./pages/NotFound";

// Layouts
import PrivateLayout from "./layout/PrivateLayout";
import LandingLayout from "./layout/LandingLayout";
import ProtectedRoutes from "./ProtectedRoutes";
import LessonDetail from "./pages/Test";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="test" element={<LessonDetail />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="/private" element={<ProtectedRoutes />} />
      <Route path="/lessons" element={<PrivateLayout />}>
        <Route index element={<Home />} />
        <Route path=":lessonId" element={<LessonPage />} />
        <Route path="instructor" element={<InstructorPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
