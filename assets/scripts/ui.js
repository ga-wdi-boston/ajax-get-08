'use strict';

const onSuccess = function(data){
  console.log('data is: ' + JSON.stringify(data));
  console.table(data.books);
};

const onSuccessInputBook = function(data){
  console.log('data is: ' + JSON.stringify(data));
  console.table(data);
};

const onFailure = function(data){
  console.log('data is: ' + JSON.stringify(data));
  let errorMessage = 'Error: That isn\'t one of the books!';
  console.table(errorMessage);
};

module.exports = {
  onSuccess,
  onSuccessInputBook,
  onFailure,
};
