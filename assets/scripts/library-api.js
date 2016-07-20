'use strict';

//this is so we dont have to type the whole hostname everytime.
const app = require('./app');

//makes an array of every book in /books.
const index = function(){
  //returns an object
  return $.ajax({
    method: 'GET',
    url: app.host + '/books',
  });
};

//get one book
const show = function(id){
  return $.ajax({
    method: 'GET',
    url: app.host + '/books/' + id,
  });
};


module.exports = {
  index,
  show,
};
