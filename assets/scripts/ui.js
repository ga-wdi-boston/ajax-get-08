'use strict';

//has data
const onSuccess = function(data){
  //true if user enters an exisiting id in the text box
  if (data.book) {
      console.log(data.book);
      $('form').append('<p>ID: ' + data.book.id + '<br>' +
                       'Title: ' + data.book.title + '<br>' +
                       'Author: ' + data.book.author + '</p>');
  }
  else {
    console.log(data.books);
  }

};

//has error
const onError = function(response){
  console.error(response);
};

module.exports = {
  onSuccess,
  onError,
};
