import express from "express";
import routes from "./src/routes/plantaRoutes.js";

const app = express();

routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando...");
});