const Book = require('../models/Book');

function getBookById(req, res) {
    const {bookId} = req.params
    Book.findByPk(bookId, {attributes: ['title', 'description',  'price']
    }).then((book) => {
        if (!book) {
            res.status(404).json({error: 'Book not found'});
        } else {
            res.status(200).json(book);
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
        res.status(20).json(newBook);
    }).catch((e) => {
        res.status(500).json({error: e.message});
    });
}

function list(req, res) {
    const {page, per_page, sortItem='Id', sortMethod='ASC'} = req.query;
    let totalItems;
    console.log('---------------------------------sortItem sortMethod', sortMethod, sortItem)
    Book.count().then(res => {
        if (res) {
            totalItems = res;
        }
    }).catch(err => {
        res.status(500).json({error: err.message})
    });
    Book.findAll({
        order: [
            [sortItem.toLocaleLowerCase(), sortMethod],
        ],
        offset: (page*per_page)-per_page,
        limit: per_page,
        attributes:  ['id', 'title', 'description', 'price'],
    }).then((books) => {
        const total = Math.ceil(totalItems/per_page)
        const response = {pagination: {page, per_page, total}, books}
        res.status(200).json(response);
    }).catch((e) => {
        res.status(500).json({error: e.message});
    });
}

module.exports = {
    getBookById, create, list,
};
