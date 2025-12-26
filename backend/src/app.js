import express from "express";
import aiRoutes from './routes/ai.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/ai', aiRoutes);

export default app;
