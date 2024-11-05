import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.tsx"
import ErrorPage from "./error-page.tsx"
import { Add } from "./components/Add.tsx"
import { getProfile, Profile } from "./components/Profile.tsx"
import { Home } from "./components/Home.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "add",
        action: async ({ request }) => {
          console.log("ha request", (await request.formData()).get("name"))
          return null
        },
        element: <Add />,
      },
      {
        path: "profile/:name",
        loader: async ({ params }) => await getProfile(params.name),
        element: <Profile />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
])
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
