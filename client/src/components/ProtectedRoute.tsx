import { useAuth } from "@/hooks/useAuth"
import { PropsWithChildren } from "react"
import { SignIn } from "./SignIn"

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { user } = useAuth()
  if (!user) {
    return <SignIn />
  }

  return children
}
