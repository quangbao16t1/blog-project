import express, { Router } from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./src/models/index.js";
import apiRouter from "./src/routes/index.js";


dotenv.config();

const app = express();

const port = process.env.PORT || 3332;

try {
    connectDB.sequelize.sync({ force: false })
       .then(() => {
           console.log('yes re-sync done!')
       })
} catch (error) {
    console.log(error);
}
       
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', apiRouter)

app.get("/", (req, res) => {
    res.json({
       message: "Hell World"
    });
});

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});