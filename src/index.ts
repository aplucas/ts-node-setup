import * as dotenv from "dotenv"
import * as express from "express"
import { Request, Response } from "express"
import Person from "@/person"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.get("/", (req: Request, res: Response) => {
  res.send(new Person().sayHello())
})

app.listen(port, () => console.log(`Running: http://localhost:${port}`))
