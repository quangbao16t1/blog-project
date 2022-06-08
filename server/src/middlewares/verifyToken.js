import jwt from "jsonwebtoken";
import connectDB from "../models/index.js";

const UserModel = connectDB.users;
const RoleModel = connectDB.roles;

export const verifyToken = (request, response, next) => {
    const token = request.header('auth-token');

    if (!token) return response.status(401).send({ message: 'Access Denied' });

    try {
        jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
            if (err) {
                console.log(err);
                response.status(401).send({ message: 'Access Denied' });
            } else {
                request.id = decoded.id;
                request.isLoggedIn = true;
                next();
            }
        });
    } catch (err) {
        return response.status(400).send({ message: 'Invalid Token' });
    }
};

export const isAdmin = async (req, res, next) => {
    await UserModel.findAll({ where: { id: req.id } })
        .then((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            RoleModel.findAll({ where: { id: user.roleId } },
                (err, roles) => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }
                    for (let i = 0; i < roles.length; i++) {
                        if (roles[i].name === "Admin") {
                            next();
                            return;
                        }
                    }
                    res.status(403).send({ message: "Require Admin Role!" });
                    return;
                }
            );
        });
};


// export default verifyToken;