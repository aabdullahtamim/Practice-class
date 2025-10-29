
import express, { type Application } from "express";
import router from "./app/router/index.js";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler.js";

const app: Application = express()


// Middleware;
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.use('/api/v1', router);

// global error handler
app.use(globalErrorHandler);


export default app;