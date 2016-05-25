'use strict';

const getBooks = function(){
  return $.ajax({
    url: 'http://localhost:3000/books',
    method: 'GET',
  });
};

module.exports = {
  getBooks,
};
