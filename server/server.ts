import express, { Request, Response, RequestHandler } from "express"
import postRoutes from "./routes/postsRoutes"
import cors from "cors"
import { authMiddleware } from "./middlewares/authMiddleware"

const port = 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use(authMiddleware)

app.use("/api/posts", postRoutes)

app.listen(port, () => console.log("listening on port ", port))
