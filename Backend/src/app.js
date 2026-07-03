import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from "./routes/api.js";
import passport from './config/passport.js';

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(passport.initialize());
app.use("/api", router);

app.get("/", (req, res) => {
    res.send("Welcome to the API");
});

export default app;