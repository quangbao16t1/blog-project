import Message from "../commons/message.js";
import RES from "../commons/status.js";
import { registerValidator, updateUserValidate } from "../commons/validation.js";
import UserService from "../services/user.service.js";

const UserController = {};

UserController.getAllUsers = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        RES.success(res, users, Message.success);
    } catch (error) {
        RES.internal(res, error, Message.notFound)
    }
}

UserController.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await UserService.deleteUser(id);
        RES.success(res, result, Message.delete);
    } catch (error) {
        RES.notFound(res, error, Message.unDelete);
    }
}

UserController.getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await UserService.getUserById(id);
        RES.success(res, result, Message.success);
    } catch (error) {
        RES.notFound(res, error, Message.notFound);
    }
}

UserController.createUser = async (req, res) => {
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        passwordHash: req.body.passwordHash,
        address: req.body.address,
        roleId: req.body.roleId,
    }

    const { error } = registerValidator(user);

    if (error) return res.status(422).json({
        error: error.details[0].message
    });

    await UserService.createUsers(user)
        .then(() => {
            RES.created(res, user, Message.create);
        })
        .catch((error) => {
            RES.internal(res, error, Message.unCreate);
        })
}

UserController.updateUser = async (req, res) => {
    const userUpdate = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        roleId: req.body.roleId,
    }

    const { error } = updateUserValidate(userUpdate);
    if (error) return res.status(422).json({
        error: error.message
    });

    const id = req.params.id;

    await UserService.updateUser(id, userUpdate)
        .then((user) => {
            RES.updated(res, user ,Message.update);
        })
        .catch((error) => {
            RES.internal(res, error, Message.unUpdate);
        })
}


export default UserController;