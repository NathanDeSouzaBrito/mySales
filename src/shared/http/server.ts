import express from "express";
import cors from "cors";
import routes from "./routes/index.ts";

const app = express();
const PORT = 3003;

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
