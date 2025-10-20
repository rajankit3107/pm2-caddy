import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.get("/:id", (req: Request, res: Response) => {
  res.send(`Hey ${req.params.id}`);
});

app.listen(3000, "0.0.0.0", () => {
  console.log(`server is running on port 3000`);
});
