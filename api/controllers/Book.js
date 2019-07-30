const Book = require('../models/Book');

function getBookById(req, res, next, id) {
    Book.findById(id, {attributes: {exclude: ['title', 'description',  'price']}
    }).then((book) => {
        if (!book) {
            res.status(404).json({error: 'Book not found'});
        } else {
      req.dbBook = book;
      next();
        }
    }).catch((e) => {
        res.status(500).json({error: e.message});
    });
}

function create(req, res) {
    const { title, description, price} = req.body;
    Book.create({
        title,
        description,
        price
    }, {attributes: ['title', 'description', 'price']
    }).then((newBook) => {
        res.status(201).json(newBook);
    }).catch((e) => {
        res.status(500).json({error: e.message});
    });
}

function list(req, res) {
    const {offset = 0, limit = 50} = req.query;
    Book.findAll({
        offset: offset,
        limit: limit,
        attributes:  ['id', 'title', 'description', 'price'],
    }).then((books) => {
        res.status(200).json(books);
    }).catch((e) => {
        res.status(500).json({error: e.message});
    });
}


module.exports = {
    getBookById, create, list,
};
