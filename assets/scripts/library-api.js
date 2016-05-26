'use strict';

const getBooks = function(){
  return $.ajax({
    url: 'http://localhost:3000/books',
    method: 'GET',
  });
};

const getInputBook = function(bookIndex){
  return $.ajax({
    url: 'http://localhost:3000/books/' + bookIndex,
    method: 'GET',
  });
};

module.exports = {
  getBooks,
  getInputBook,
};
