import cors from "cors";
import express from "express";

import StudentRoute from "./routes/StudentRoute.js";
import UserRoute from "./routes/UserRoute.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(StudentRoute)
app.listen(5000, () => {
    console.log("Server is running on port 5000");
})