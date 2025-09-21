import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  }
]

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
})

const App = () => {
  return <RouterProvider
    router={router}
    future={{
      v7_startTransition: true,
    }}
  />
}

export default App;