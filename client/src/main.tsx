import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.tsx"
import ErrorPage from "./error-page.tsx"
import { Add } from "./screens/Add.tsx"
import { Profile } from "./screens/Profile.tsx"
import { Home } from "./screens/Home.tsx"
import { ProtectedRoute } from "./components/ProtectedRoute.tsx"
import { Toaster } from "./components/ui/toaster.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "add",
        // action: async ({ request }) => {
        //   console.log("ha request", (await request.formData()).get("name"))
        //   return null
        // },
        element: (
          <ProtectedRoute>
            <Add />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        // loader: async ({ params }) => await getProfile(params.name),
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
    <Toaster />
  </StrictMode>
)
