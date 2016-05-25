'use strict';

const onSuccess = function(data){
  console.table(data.books);
};

module.exports = {
  onSuccess,
};
