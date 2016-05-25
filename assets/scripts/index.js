'use strict';

const libraryApi = require('./library-api');
const ui = require('./ui');

// all books handler
const getBooksHandler = function(event){
  event.preventDefault();
  libraryApi.getBooks().done(ui.onSuccess);
};

// input book handler
const getInputBookHandler = function(event){
  event.preventDefault();
  libraryApi.getInputBook($('#input-book-name').val())
  .done(
    ui.onSuccessInputBook
  )
  .fail(
    ui.onFailure
  );
};

// On document ready
$(() => {
  $('#get-books').on('click', getBooksHandler);
  $('#get-input-book').on('click', getInputBookHandler);
});

// $(document).ready( function(){} ); is the same as $( () => {} );
