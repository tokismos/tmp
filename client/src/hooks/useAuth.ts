import { AuthContext } from "@/providers/AuthProvider"
import { useContext } from "react"

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("Auth context should be inside provider")
  }
  return context
}
