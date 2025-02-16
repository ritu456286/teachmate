import jwt from "jsonwebtoken"
//dotenv not called?
export const generateToken = (userId, res) => {

    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "1d",
    })

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, //MS
        httpOnly: true, //prevent XSS attacks [cross-site scripting attacks]
        sameSite: process.env.NODE_ENV === "production" ? "None" : "Strict" , //CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV === "production" //sets to true in production mode for https, and false in test mode for http in localhost
    })
    return token;
}