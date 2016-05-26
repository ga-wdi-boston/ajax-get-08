'use strict';

const getBooksAuthor = function() {
  return $.ajax({
    url: 'http://localhost:3000/books/',
    method: 'GET',
  });
};

const getBooksTitle = function() {
  return $.ajax({
    url: 'http://localhost:3000/books/',
    method: 'GET',
  });
};

const getBooksId = function(id) {
  return $.ajax({
    url: 'http://localhost:3000/books/' + id,
    method: 'GET',
  });
};

const getAllBooks = function() {
  return $.ajax({
    url: 'http://localhost:3000/books/',
    method: 'GET',
  });
};
module.exports = {
  getBooksAuthor,
  getBooksTitle,
  getBooksId,
  getAllBooks,
 };
