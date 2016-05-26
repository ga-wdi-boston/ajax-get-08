'use strict';
//Search by author
const authorName = function(book) {
  return book.author === $('#search').val();
};
  const onSuccessAuthor = function(data) {
  $('span').remove();
  let books = (data.books.filter(authorName));
  if(books.length > 0) {
    for(let i = 0; i < books.length; i++) {
    $('#insert').append('<span>' + $('#search').val() + " wrote " + books[i]["title"] + "<br /></span>");

  }
}
  else {
    $("#insert").append("<span>Sorry that name is not found.</span>")
  }
  $('#search').val('');
}
//Search by Title
const bookTitle = function(book) {
  return book.title === $('#search-title').val();
};
  const onSuccessTitle = function(data) {
  $('span').remove();
  $('#insert').append('<span>' + data.books.find(bookTitle)["title"] + " is written by " +
data.books.find(bookTitle)["author"] + '</span>');
$('#search-title').val('');
}
//Search by ID Number

  const onSuccessID = function(data) {
  $('span').remove();
  $("#insert").append('<span>' + data.book.title + " by " + data.book.author + '</span>');
  $('#search-ID').val('');
}

//Show all Books in the browser
const onSuccessAll = function(data) {
  $('span').remove();
  for(let i = 0; i < data.books.length; i++){
    $("#insert").append('<span>'+ (i + 1) + ". " + data.books[i].title + " by " +
    data.books[i].author + "<br /></span>");
  }
}
module.exports = {
onSuccessAuthor,
onSuccessTitle,
onSuccessID,
onSuccessAll,
};
