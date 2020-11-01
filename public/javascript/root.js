// include the navbar
$(function () {
  $(".insertnav").load("nav.html");
});

// insert image
$('.pic-me').append('<img src="assets/img/pic_me.JPG" alt="my image">');

$(function () {
  $(".insertfooter").load("footer.html");
});

$(function () {
  $(".topscripts").load("topscripts.html");
});

// Insert the list of books.
fetch("data/books.txt")
.then(response=>response.text())
.then(function(t) {
  let books = (t.split('\n'));
  for(i in books){
    console.log(books[i]);
    $('#booklist').append('<li>' +books[i]+'</li>')
  }
});


// Insert my schedule
fetch("data/schedule.txt")
.then(response=>response.text())
.then(function(t) {
  let schedule = (t.split('\n'));
  for(i in schedule){
    console.log(schedule[i]);
    $('#booklist').append('<li>' +schedule[i]+'</li>')
  }
});
