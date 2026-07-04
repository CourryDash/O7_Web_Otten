import users from '../models/users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await users.findOne({ where: { email }});
        if (!user) {
            return res.status(404).json({ error: "Email tidak terdaftar" });
        }
        
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch){
            return res.status(401).json({ error: "Password salah" });
        }

        const token = jwt.sign(
            {
                id_user: user.id_user, 
                email: user.email, 
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'none',
            maxAge: 3600000
        });

        res.status(200).json({ 
            message: "Login Berhasil",
            user: {
                id_user: user.id_user,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
    } catch (err) {
        console.error("Error saat login: ", err);
        res.status(500).json({ error: "Gagal melakukan login."});
    }
};

export const getCurrentUser = async (req, res) => {
    try {
        const user = await users.findByPk(req.user.id_user, {
            attributes: ['id_user', 'username', 'email', 'role']
        });
        
        if (!user) {
            return res.status(404).json({ error: "User tidak ditemukan" });
        }
        
        res.status(200).json({ user });
    } catch (error) {
        console.error("Error fetching current user:", error);
        res.status(500).json({ error: "Gagal mengambil data user" });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await users.findAll({
            attributes: ['id_user', 'username', 'email', 'role']
        });
        res.status(200).json(allUsers);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Failed to fetch users" });
    }
};

export const getUserById = async (req, res) => {
    const { id_user } = req.params;
    try {
        const user = await users.findByPk(id_user , {
            attributes: ['id_user', 'username', 'email', 'role']
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user);
        
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Failed to fetch user" });
    }
};

export const getUserByEmail = async (req, res) => {
    const { email } = req.params;
    try {
        const user = await users.findOne({ where: { email }, attributes: ['id_user', 'username', 'email', 'role'] });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Failed to fetch user" });
    }
};

export const createUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !email || !password) {
            return res.status(400).json({ error: "Username, email, dan password wajib diisi." });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Format email tidak valid." });
        }

        const existingEmail = await users.findOne({ where: { email } });
        if (existingEmail) {
            return res.status(409).json({ error: "Email sudah terdaftar. Silakan gunakan email lain." });
        }

        const existingUsername = await users.findOne({ where: { username } });
        if (existingUsername) {
            return res.status(409).json({ error: "Username sudah digunakan. Silakan pilih username lain." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await users.create({ username, email, password: hashedPassword });
        res.status(201).json({
            id_user: newUser.id_user,
            username: newUser.username,
            email: newUser.email,
            role: newUser.role
        });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Failed to create user" });
    }
};

export const updateUser = async (req, res) => {
    const id_user = req.user.id_user;
    const { username, email, password } = req.body;
    try {
        const user = await users.findByPk(id_user);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        if (email && email !== user.email) {
            const existingEmail = await users.findOne({ where: { email }, attributes: ['id_user', 'username', 'email', 'role'] });
            if (existingEmail) {
                return res.status(409).json({ error: "Email sudah digunakan oleh user lain." });
            }
        }

        if (username && username !== user.username) {
            const existingUsername = await users.findOne({ where: { username }, attributes: ['id_user', 'username', 'email', 'role'] });
            if (existingUsername) {
                return res.status(409).json({ error: "Username sudah digunakan oleh user lain." });
            }
        }

        user.username = username || user.username;
        user.email = email || user.email;

        if (password) {
            user.password = await bcrypt.hash(password, 10);
        }
        
        await user.save();
        res.status(200).json({
            id_user: user.id_user,
            username: user.username,
            email: user.email,
            role: user.role
        });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: "Failed to update user" });
    }
};

export const deleteUser = async (req, res) => {
    const id_user = req.user.id_user;
    try {
        const user = await users.findByPk(id_user);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        await user.destroy();
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: "Failed to delete user" });
    }
};

export const logoutUser = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            sameSite: 'lax',
            // secure: process.env.NODE_ENV === 'production'
        });
        res.status(200).json({ message: "Logout berhasil" });
    } catch (error) {
        console.error("Error saat logout:", error);
        res.status(500).json({ error: "Gagal logout" });
    }
};