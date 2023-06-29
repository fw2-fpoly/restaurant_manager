import express from "express"
import { Server } from "socket.io"
import { createServer } from "http"

const app = express()
const server = createServer(app)
const io = new Server(server)

app.get('/', (req, res, next) => {
	res.send('abc')
})

io.on("connection", (socket) => {
	console.log(socket)
})

server.listen(8080, () => {
	console.log("http://localhost:8080")
})
