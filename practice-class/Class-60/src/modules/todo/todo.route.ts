import { Router } from "express";

export const todoRouter = Router();

todoRouter.get('/all-todos', (req, res) => {
    // pull data from dataBase;
    res.json([
        {
            id: 1,
            todo: 'this is first todo'
        }
    ])
})

todoRouter.post("/create-todo", (req, res) => {

    // set body data to dataBase;
    res.json(
        {
            "todo": "this is our first todo"
        }
    )
})

todoRouter.post("/delete-todo/:id", (req, res) => {
    // delete data from database;

    const todoId = req.params?.id;

    console.log(todoId);
    res.json({
        message: "todo item delete successfully "
    })
})

todoRouter.get('/test', (req, res) => {

    let params = req.query;
    console.log(params);


    res.json({
        message: "successfully"
    })
})

