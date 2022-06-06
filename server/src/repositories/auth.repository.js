import connectDB from "../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const UserModel = connectDB.users;

const AuthRepo = {};

AuthRepo.login = async (email, password) => {

    const user = await UserModel.findOne({ where: { email: email } });

    console.log(user.passwordHash);
    console.log(user);

    if (user && bcrypt.compareSync(password, user.passwordHash)) {
        const token = jwt.sign({ sub: user.id }, process.env.TOKEN_SECRET, { expiresIn: '7d' });
        return {
            ...user.toJSON(),
            token
        };
    }
}
AuthRepo.register = async (user) => {

    if (await UserModel.findOne({ where: { email: user.email } })) {
        throw `Email  ${user.email} is already taken`;
    }

    const userCreate = new UserModel();

    Object.assign(userCreate, user);

    if (user.passwordHash) {
        userCreate.passwordHash = await bcrypt.hashSync(user.passwordHash, 8);
    }

    await userCreate.save();
}

export default AuthRepo;