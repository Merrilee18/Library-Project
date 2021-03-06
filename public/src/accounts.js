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
        //console.log(acc);
        return acc;
      }, 0) 
    }


//FINISHED
//create an array of all the books currently checkout out by 
//the account.
//look in the books -> borrows -> loop through ID
//if match, push books[i]
//match author id w/ author
//push author
function getBooksPossessedByAccount(account, books, authors) {
  return books.reduce((acc, book) => {
     book.borrows.forEach(borrowedBook => {
      if(borrowedBook.id === account.id
        && borrowedBook.returned === false) {
          book.author = authors.find(author => 
            author.id === book.authorId)
          acc.push(book);
        //console.log(acc);
        }
      })
      return acc;
  }, [])
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
