const User = require('../models/User');

function get(req, res) {
  return res.status(200).json(req.dbUser);
}

function create(req, res) {
    const { username, password } = req.body;
  User.create({
    username,
    password
  }, { attributes: { exclude: ['refresh_token'] } }).then((newUser) => {
    res.status(201).json(newUser);
  }).catch((e) => {
    res.status(500).json({ error: e.message });
  });
}

function update(req, res) {
  req.dbUser.update(req.body).then(() => {
    res.sendStatus(201);
  }).catch((e) => {
    res.status(500).json({ error: e.message });
  });
}

function list(req, res) {
  const { offset = 0, limit = 50 } = req.query;
  User.findAll({
    offset: offset,
    limit: limit,
    attributes: { exclude: ['password', 'refresh_token'] },
  }).then((users) => {
    res.status(200).json(users);
  }).catch((e) => {
    res.status(500).json({ error: e.message });
  });
}

async function remove(req, res) {
  await req.dbUser.destroy();
  res.sendStatus(204);
}

module.exports = {
  get, create, update, list, remove,
};
