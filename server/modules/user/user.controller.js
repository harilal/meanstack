const User = require("./user.model");

function list(req, res, next) {
    const { limit = 50, skip = 0 } = req.query;
    User.list({ limit, skip })
      .then(users => res.json(users))
      .catch(e => next(e));
  }

module.exports = { list };