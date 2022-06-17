import connectDB from "../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserModel = connectDB.users;

const UserRepository = {};

UserRepository.getAllUsers = async () => {
    return await UserModel.findAll({
        include: [{
            model: connectDB.roles,
        }]
    });
}

UserRepository.getUserById = async (userId) => {
    return await UserModel.findOne({
        where: { id: userId },
        include: [{
            model: connectDB.roles,
        }]
    })
}

UserRepository.updateUser = async (userId, user) => {
    const userUpdate = await UserModel.findOne({ where: { id: userId } });

    if (!userUpdate) throw "User not found!!!";

    if (user.passwordHash) {
        user.passwordHash = bcrypt.hashSync(user.passwordHash, 8);
    }

    Object.assign(userUpdate, user);
    userUpdate.updateAt = Date.now();
    await userUpdate.save();
    return userUpdate;
}

UserRepository.deleteUser = async (userId) => {
    const userDelete = await UserModel.findOne({ where: { id: userId } });

    if (!userDelete) throw "User not found!!!";

    return await UserModel.destroy({ where: { id: userId } });
}

UserRepository.createUsers = async (user) => {
    
    if (await UserModel.findOne({ where: { email: user.email } })) {
        throw `Email  ${user.email} is already taken`;
    }

    const userCreate = new UserModel();

    Object.assign(userCreate, user);
    userCreate.createAt = Date.now();
    if (user.passwordHash) {
        userCreate.passwordHash = await bcrypt.hashSync(user.passwordHash, 8);
    }

    await userCreate.save();
}

UserRepository.searchUsers = async (search) => {
    return await UserModel.findOne({
        where: { lastName: search },
        include: [{
            model: connectDB.roles,
        }]
    })
}

export default UserRepository;