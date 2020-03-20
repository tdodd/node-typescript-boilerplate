import express, { Application, Request, Response } from "express";

export default class Server {
    public static start() {
        const app: Application = express();
        const port = 666;

        app.get("/", (req: Request, res: Response) => {
            console.log(`request ${req.method} ${req.path}`);
            res.json({ hello: "World" });
        });

        app.listen(port, () => {
            console.log(`App listening on port ${port}..`);
        });
    }
}
