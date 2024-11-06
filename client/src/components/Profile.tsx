import { useAuth } from "@/hooks/useAuth"
import { useParams } from "react-router-dom"
import { Button } from "./ui/button"

export const Profile = () => {
  const { user, signOut } = useAuth()
  return (
    <div>
      You are Logged as {user}
      <Button onClick={signOut}>Log out</Button>
    </div>
  )
}
