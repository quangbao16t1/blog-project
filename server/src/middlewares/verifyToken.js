import jwt from "jsonwebtoken";


const verifyToken =  (request, response, next) => {
    const token = request.header('auth-token');
    
    if (!token) return response.status(401).send({message: 'Access Denied'});

    try {
        jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
            if(err){
                console.log(err);
                response.status(401).send({message: 'Access Denied'});
            } else {
                request.id = decoded.id;
                request.isLoggedIn = true;
                next();
            }
        });
    } catch (err) {
        return response.status(400).send({message: 'Invalid Token'});
    }
};

export default verifyToken;