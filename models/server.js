const express = require("express");
const cors = require("cors");
const path = require("path");

// const { dbConnection } = require('../database/config');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;

		this.server = require("http").createServer(this.app);
		this.io = require("socket.io")(this.server);

		this.paths = {};

		// Conectar a base de datos
		// this.conectarDB();

		// Middlewares
		this.middlewares();

		// Web Sockets
		this.sockets();

		// Rutas de mi aplicación
		this.routes();
	}

	// async conectarDB() {
	// await dbConnection();
	// }

	middlewares() {
		// CORS
		this.app.use(cors());

		// Lectura y parseo del body
		this.app.use(express.json());

		// Directorio Público
		this.app.use(express.static("public"));
	}

	routes() {
		// this.app.use(this.paths.auth, require("../routes/auth"));
	}

	sockets() {
		this.io.on("connect", socket => {
			console.log("Cliente CONECTADO desde el server");
		});

		this.io.on("disconnect", socket => {
			console.log("Cliente Desconectado desde el server");
		});
	}

	listen() {
		this.server.listen(this.port, () => {
			console.log("Servidor corriendo en puerto", this.port);
		});
	}
}

module.exports = Server;
