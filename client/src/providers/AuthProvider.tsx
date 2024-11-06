import { createContext, PropsWithChildren, useState } from "react"

type Props = {
  user: string | null
  signIn: (arg: string) => void
  signOut: () => void
}
export const AuthContext = createContext<Props | null>(null)

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<string | null>(null)

  const signIn = (userId: string) => {
    if (!user) {
      setUser(userId)
    }
  }
  const signOut = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
