import auth from "./auth.router"
import table from "./table.router"


const routes = (app) => {
	app.use("/api/auth", auth)
	app.use("/api/table", table)
}

export default routes