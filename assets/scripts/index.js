'use strict';

const libraryApi = require('./library-api');
const ui = require('./ui');
//search by Author
const getBooksAuthorHandler = function(event) {
  event.preventDefault();
  libraryApi.getBooksAuthor().done(ui.onSuccessAuthor);
}
//search by Title
const getBooksTitleHandler = function(event) {
  event.preventDefault();
  libraryApi.getBooksTitle().done(ui.onSuccessTitle);
}
//search by ID Number
const getBooksIdHandler = function(event) {
  event.preventDefault();
  libraryApi.getBooksId($('#search-ID').val()).done(ui.onSuccessID);
}

//show all books
const getAllBooksHandler = function(event) {
  event.preventDefault();
  libraryApi.getAllBooks().done(ui.onSuccessAll);
}
// On document ready
$(() => {
  $('#search-book').on('click', getBooksAuthorHandler);
  $('#searchtitle').on('click', getBooksTitleHandler);
  $('#searchID').on('click', getBooksIdHandler);
  $('#allBooks').on('click', getAllBooksHandler);


});
