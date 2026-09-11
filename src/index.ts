import express, { type Express, type Request, type Response } from 'express';
import "reflect-metadata";


const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(5000);