const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class UsersValidatedController {
  async show(request, response) {
    const { id } = request.user;

    const checkUserExists = await knex("users").where({ id }).first();

    if (!checkUserExists) {
      throw new AppError("Unauthorized", 401);
    }

    return response.status(200).json();
  }
}

module.exports = UsersValidatedController;
