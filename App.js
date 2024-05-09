import {fileURLToPath} from "url";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import express from "express";
import taskController from "./controllers/taskController.js";
// import getAllTasks from "./controllers/taskController.js";


const __dirname = fileURLToPath(new URL(".", import.meta.url));
const app = express();
const PORT = 3000;

app.use(morgan());
app.use(cors());
app.use(helmet());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static( path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extends : false}));

app.get("/", taskController.getAllTasks);
app.get("/add", taskController.getAddTasks);
app.post("/add", taskController.addTask);
app.get("/edit/:id", taskController.getEditTaks);
app.post("/edit/:id", taskController.editTask);
app.get("/delete/:id", taskController.deleteTask);


app.listen(PORT, () => {
    console.log(`path: ${__dirname} route http://localhost:${PORT}`);
})
