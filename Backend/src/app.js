import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from "./routes/api.js";
import passport from './config/passport.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use("/api", router);

app.get("/", (req, res) => {
    res.send("Welcome to the API");
});

export default app;