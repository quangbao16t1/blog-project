import AuthRepo from "../repositories/auth.repository.js";


const AuthService = {};

AuthService.register = (user) => AuthRepo.register(user);

AuthService.login =  (email, password) => AuthRepo.login(email, password);


export default AuthService;
