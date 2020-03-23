import express from "express";
import routes from "./src/routes";
import cors from "cors";

const app = express();

app.use(cors())
app.use(routes);

app.listen(3333);