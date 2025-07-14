const express=require('express');

// require('express'): Imports the Express framework, which simplifies server creation in Node.js.

// express is a function. When called, it returns an app object used to define routes and middleware.

const app = express();
// Creates an instance of an Express application.

// This app object is used to define routes, middleware, and start the server.

const PORT = 5000;


app.use(express.json());
// Built-in Express middleware.

// It automatically parses incoming JSON data in req.body.

// Example:

// A request with { "title": "New Task" } becomes:

// req.body.title === 'New Task';


app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`);
    next();
  });
//   Middleware function runs before every request.

//   Logs:
  
//   HTTP method (GET, POST, etc.)
  
//   URL requested
  
//   Current timestamp
  
//   next() passes control to the next middleware or route handler.
  
let tasks = [
    { id: 1, title: 'Learn Node.js', completed: false },
    { id: 2, title: 'Build a project', completed: false }
  ];

  
app.get('/tasks',(req,res)=>{
    res.json(tasks)
});

// Route to fetch all tasks.

// res.json() sends back the tasks as a JSON response.


app.post('/tasks',(req,res)=>{
    const {title}=req.body;
    const newTask={
        id:Date.now(),
        title,
        completed:false
    };
    tasks.push(newTask)
    res.status(201).json(newTask);
})

// Extracts title from request body.

// Creates a new task object with a timestamp-based ID.

// Adds the task to the tasks array.

// Sends back the new task with 201 Created.

app.put('/tasks/:id',(req,res)=>{
    const taskId=parseInt(req.params.id);
    const {title,completed}=req.body;
    const task=tasks.find(t=>t.id===taskId)
    if (!task) return res.status(404).json({error: "Task not Found"});
    if (title!==undefined) task.title=title;
    if (completed!==undefined) task.completed=completed;

    return res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === taskId);
  
    if (index === -1) return res.status(404).json({ error: 'Task not found' });
  
    tasks.splice(index, 1);
    res.status(204).send(); // No Content
  });
  

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
  