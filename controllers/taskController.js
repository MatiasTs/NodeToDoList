
let tasks = [
    {id:1, title: "Make the TodoList", completed:false},
    {id:2, title: "Listen English podcast", completed:false},
    {id:3, title: "Lear Node.js and Express", completed:false}
];

const getAllTasks = (req, res) => {
    res.render("index", {title: "Tareas a realizar", tasks});
};

const getAddTasks = (req, res) => {
    res.render("add", {title: "Añadir Tarea"});
};

const addTask = (req, res) => {
    const {title} = body.tarea;
}


export default {
    getAllTasks,
    getAddTasks
};
