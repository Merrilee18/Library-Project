// Note: Please do not change the name of the functions. The tests use those names to validate your code.

//FINISHED
//return the account that matches the id
function findAccountById(accounts, id) {
  for(let i = 0; i < accounts.length; i++) {
    if(accounts[i].id === id) {
      return accounts[i];
    }
  }
}


//FINISHED
// sort items alphabetically by last name
function sortAccountsByLastName(accounts) {
    return accounts.sort((a, b) => a.name.last > b.name.last ? 1 : -1 );
}



//FINISHED
//books.borrows.includes(id)
function getTotalNumberOfBorrows(account, books) {
  
    return books.reduce((acc, book) => {
      book.borrows.forEach(borrowedbook => {
        if(borrowedbook.id === account.id) {
          acc++;
        }}, 0)  
        return acc;
      }, 0) 
    }


//FINISHED
//added spread operator

const getBooksPossessedByAccount = (account, books, authors) => {
  let result = [];
  books.forEach((book) => {
    if (book.borrows.some(borrow => borrow.id === account.id && 
        !borrow.returned)) {
          result.push({
            id : book.id, 
            title: book.title, 
            genre: book.genre, 
            authorId: book.authorId, 
            author: authors.find((author) => author.id === book.authorId),
            borrows: [...book.borrows]
          });
      }
  });
  return result;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
