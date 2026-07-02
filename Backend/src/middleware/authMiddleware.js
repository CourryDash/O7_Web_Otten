import jwt from "jsonwebtoken";
import 'dotenv/config';

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];

    if (!token){
        return res.status(401).json({ error: "Akses ditolak, silahkan login terlebih dahulu."});
    }

    try{
        const verified = jwt.verify(token, process.env.JWT_SECRET);

        req.user = verified;
        next();
    } catch (err) {
        res.status(403).json({ err: "Token tidak valid atau sudah kadaluarsa"});
    }
};

export const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        return res.status(403).json({ message: "Akses ditolak. Anda tidak memiliki hak akses." });
    }
};