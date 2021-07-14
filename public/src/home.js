// Note: Please do not change the name of the functions. The tests use those names to validate your code.

//FINISHED
//add up all books
function getTotalBooksCount(books) {
  let sum = 0;
  for (let i = 0; i < books.length; i++) {
    sum++;
  }
  return sum;
}

//FINISHED
function getTotalAccountsCount(accounts) {
  let sum = 0;
  for (let i = 0; i < accounts.length; i++) {
    sum++;
  }
  return sum;
}

//FINISHED
function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => {
    book.borrows.forEach((borrowedBook) => {
      if (borrowedBook.returned === false) {
        acc++;
      }
    }, 0);
    return acc;
  }, 0);
}

//FINISHED
//calculate total books per genre
//return an ordered array with five most popular genres
// array with objects {name: , count: }

function getMostCommonGenres(books) {
  return books
    .reduce((genres, book) => {
      const genreExists = genres.find((genre) => genre.name === book.genre);

      if (genreExists) {
        genreExists.count += 1;
      } else {
        genres.push({
          name: book.genre,
          count: 1,
        });
      }
      return genres;
    }, [])
    .sort((a, b) => b.count - a.count)
    .splice(0, 5);
}

//FINISHED
//calculate total borrows per book
//return an array of objects [{name: "incididunt", count: 24}]
function getMostPopularBooks(books) {
  let popularBookList = [];
  for (let i = 0; i < books.length; i++) {
    //const borrowed = books[i].borrows;
    //console.log(borrowed.length)
    popularBookList.push({
      name: books[i].title,
      count: books[i].borrows.length,
    });
  }
  return popularBookList.sort((a, b) => b.count - a.count).splice(0, 5);
}

// FINISHED
// function getFirstAndLast(authors) {
//   console.log("authors", authors);
//   const nameObject = authors.find((author) => book.authorId === author.id).name;
//   return `${nameObject.first} ${nameObject.last}`;


function getMostPopularAuthors(books, authors) {
  return books
    .reduce((mostPopularAuthors, book) => {

      //helper function
      function getFirstAndLast() {
          const nameObject = authors.find(author => book.authorId === author.id).name;
          return `${nameObject.first} ${nameObject.last}`
      }

      const authorExists = mostPopularAuthors.find(
        (popAuthor) => popAuthor.name === getFirstAndLast()
      );

      if (authorExists) {
        authorExists.count += book.borrows.length;
      } else {
        mostPopularAuthors.push({
          name: getFirstAndLast(),
          count: book.borrows.length,
        });
      }
      return mostPopularAuthors;
    }, [])
    .sort((a, b) => b.count - a.count)
    .splice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
