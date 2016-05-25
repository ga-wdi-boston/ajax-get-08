'use strict';

const onSuccess = function(data){
  console.table(data.books);
};

const onSuccessInputBook = function(data){
  console.table(data.book);
};

const onFailure = function(data){
  let errorMessage = 'Error: That isn\'t one of the books!';
  console.table(errorMessage);
};

module.exports = {
  onSuccess,
  onSuccessInputBook,
  onFailure,
};
