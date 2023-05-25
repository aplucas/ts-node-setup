import { Express, Request, Response } from "express"
// import livros from "./livrosRoutes.js"
// import autores from "./autoresRoutes.js"

const routes = (app: Express) => {
  app.route("/").get((req: Request, res: Response) => {
    res.status(200).send({ titulo: "My Express Setup" })
  })

  // app.use(
  //   express.json()
  // livros,
  // autores
  // )
}

export default routes
