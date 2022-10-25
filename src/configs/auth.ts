export default {
  users: {
    expiresIn: "1d",
    secretKey: process.env.SECRET_KEY || "test",
    token_validator: process.env.USER_TOKEN_VALIDSTOR || "test",
  },
};
