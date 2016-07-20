'use strict';

//import other js files
const libraryApi = require('./library-api');
const ui = require('./ui');

//get books array from localhost:3000
const onGetBooks = function(event){
  //stops the submit buttons automatic features
  event.preventDefault();

  //assign the value in the textbox to bookID
  let bookID = $('.book-id').val();

  if (!bookID) {
    //get request
    libraryApi.index()
      //if success
      .done(ui.onSuccess)
      //if fail
      .fail(ui.onError);
  }
  else {
    //get request
    libraryApi.show(bookID)
      //if success
      .done(ui.onSuccess)
      //if fail
      .fail(ui.onError);
  }
};

//document ready statement
$(()=>{
  //run code on submit
  $('#book-request').on('submit', onGetBooks);
});
