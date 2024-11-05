import { RequestHandler } from "express"

export const authMiddleware: RequestHandler = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      res.status(401).json({ message: "No token provided" })
    }
    const token = authHeader?.split(" ")[1]

    if (token !== "aaaa") {
      res.status(401).json({ message: "Token is invalid" })
    }
  } catch (error) {
    res.status(500).json({ message: "authentificaiton faield" })
  }

  next()
}
