const AppError = require("../utils/AppError.js");

function verifyUserAuthorization(rolesToVerify) {
  return (request, response, next) => {
    const { role } = request.user;

    if (!rolesToVerify.includes(role)) {
      throw new AppError("Unauthorized", 401);
    }

    return next();
  };
}

module.exports = verifyUserAuthorization;
