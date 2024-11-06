import { Header } from "./components/Header"
import { Outlet, useNavigation } from "react-router-dom"
import { AuthProvider } from "./providers/AuthProvider"
import { QueryProvider } from "./providers"

function App() {
  const navigation = useNavigation()

  return (
    <AuthProvider>
      <QueryProvider>
        <div className="w-screen h-screen bg-green-400">
          <Header />
          {navigation.state === "loading" && <div>Loading....</div>}
          <Outlet />
        </div>
      </QueryProvider>
    </AuthProvider>
  )
}

export default App
