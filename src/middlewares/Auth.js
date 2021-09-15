exports.createToken = (payload) => {
    const  payload = payload;
    const secretKey = process.env.TOKEN_SECRET_kEY;
    const expirationTime = process.env.TOKEN_EXPIRATION_TIME;

    console.log(payload, secretKey, expirationTime)
}