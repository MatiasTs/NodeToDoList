
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

const getEditTaks = (req, res) => {
    const id = parseInt(req.params.id);
    let task = tasks.find(task => task.id === id);
    if(!task){
        res.rendirect("/");
    }else{
        
        res.render("edit", {title: "Editar Tareas", task} )
    }
}

const editTask = (req, res) => {
    let id = parseInt(req.params.id);
    let taskIndex = tasks.findIndex((task) => task.id === id);
    if(taskIndex === -1){
        res.redirect("/");
    }else{
        tasks[taskIndex].title = req.body.title;
        res.redirect("/");
    }
}

const deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter((task) => task.id !== id);
    let newId = 1;
    tasks = tasks.map(task => {
        task.id = newId;
        newId+=1;
        return task;
    })
    
    res.redirect("/");
    
}


export default {
    getAllTasks,
    getAddTasks,
    addTask,
    getEditTaks,
    editTask,
    deleteTask
};
