'use strict';

const libraryApi = require('./library-api');
const ui = require('./ui');

// handler
const getBooksHandler = function(event){
  event.preventDefault();
  libraryApi.getBooks().done(ui.onSuccess);
};

// On document ready
$(() => {
  $('#get-books').on('click', getBooksHandler);
});
