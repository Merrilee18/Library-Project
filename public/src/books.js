// Note: Please do not change the name of the functions. The tests use those names to validate your code.


//FINISHED
//loop through the authors and find the author
function findAuthorById(authors, id) {
  for (let i = 0; i < authors.length; i++) {
    if (authors[i].id === id) {
      return authors[i];
    }
  }
}

//FINISHED
function findBookById(books, id) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      return books[i];
    }
  }
}

//FINISHED
//returns two arrays(loanedOut, available) within an array (allBooks)
//one array is "loaned out", second is "available"
// look through the books.borrows and determine which books include
// "false", and put those in the loanedOut array. All the rest
// put into available
function partitionBooksByBorrowedStatus(books) {
  const loanedOut = [];
  const available = [];

  books.forEach((book) => {

    if (book.borrows[0].returned === false) {
      loanedOut.push(book);
    } else {
      available.push(book);
    }
  });
  return [loanedOut, available];
}

//FINISHED
//return an array of all the borrowers of one book
//include user ID and status = returned: true/false

function getBorrowersForBook(book, accounts) {
  const combinedBorrowers = book.borrows.map((borrower) => {
    const account = accounts.find((account) => {
      return account.id === borrower.id;
    });
    account.returned = borrower.returned;
    return account;
  });
  return combinedBorrowers.splice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
