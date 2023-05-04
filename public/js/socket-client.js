const socket = io();

socket.on("connect", () => {
	console.log("Conectado desde el cliente");
});

socket.on("disconnect", () => {
	console.log("Desonectado desde el cliente");
});
