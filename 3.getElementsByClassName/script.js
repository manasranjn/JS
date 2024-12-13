//Selecting elements by class name "book"
const bookList = document.getElementsByClassName("book");
// console.log(bookList);

//Loop through the HTMLCollection
//?first convert into an array
const bookListArray = Array.from(bookList);
// console.log(bookListArray);

//?then loop through the array
bookListArray.forEach((book) => {
    console.log(book);
});


//?Using map()
const bookListMap = Array.from(bookList).map((book) => {
    console.log(book.innerHTML);
});

//Selecting elements by class name "fiction"
const fictionBooksEl = document.getElementsByClassName("fiction");
// console.log(fictionBooksEl);

//Selecting elements by class name "non-fiction" within the "nonFictionSection"
const nonFictionEl = document.getElementById("nonFictionSection");
// console.log(nonFictionEl);

const nonFictionBooksInSection = nonFictionEl.getElementsByClassName("non-fiction");
// console.log(nonFictionBooksInSection);
// console.log(nonFictionBooksInSection[0]);
