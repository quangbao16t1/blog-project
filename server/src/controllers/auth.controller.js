import Message from "../commons/message.js";
import RES from "../commons/status.js";
import AuthService from "../services/auth.service.js";

const AuthController = {};

AuthController.register = async (req, res) => {
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        passwordHash: req.body.passwordHash,
        address: req.body.address,
        roleId: req.body.roleId,
        createAt: Date.now(),
    }
    await AuthService.createUsers(user)
        .then(() => {
            RES.created(res, user, Message.create);
        })
        .catch((error) => {
            RES.internal(res, error, Message.unCreate);
        })
}


AuthController.login = async (req, res) => {

    const email = req.body.email;
    const passwordHash = req.body.passwordHash;
    await AuthService.login(email, passwordHash)
        .then(user => user ? res.json({ User: user }) : res.status(400).json({ message: Message.loginValid }))
        .catch(error => {
            console.log(error);
        })
}


export default AuthController;