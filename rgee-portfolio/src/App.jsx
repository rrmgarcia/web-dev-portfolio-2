import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Views/home";
import Footer from "./Components/Footer";
import Projects from "./Views/Projects";
import Contact from "./Views/Contact";
import toast, { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/projects", element: <Projects /> },
  { path: "/contact", element: <Contact /> },
]);

function App() {
  return (
    <div>
      <Navbar />
      <Toaster position="bottom-right" reverseOrder={false} />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
