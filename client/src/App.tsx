import { Header } from "./components/Header"
import { Outlet, useNavigation } from "react-router-dom"

function App() {
  const navigation = useNavigation()

  return (
    <div className="w-screen h-screen bg-green-400">
      <Header />
      {navigation.state === "loading" && <div>Loading....</div>}
      <Outlet />
    </div>
  )
}

export default App
