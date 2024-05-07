
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
    const {title} = req.body;
    let id = tasks.length + 1;
    tasks.push({id, title, completed:false});
    res.redirect("/");
}


export default {
    getAllTasks,
    getAddTasks,
    addTask
};
