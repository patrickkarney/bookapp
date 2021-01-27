{
  'use strict';
  const select = {
    templateOf: {
      book: '#template-book',
    },

    containerOf: {
      booksPanel: '.books-list',
    },

    book: {
      image: '.books-list .book__image',
      favorite: '.books-list .favorite',
    },
  };

  const templates = {
    book: Handlebars.compile(document.querySelector(select.templateOf.book).innerHTML),
  };

  const favoriteBooks = [];

  function render(){

    for(const data of dataSource.books){
      /*generate HTML based on template */
      const generateHTML = templates.book(data);
      
      /*create element using utils.createElementFromHTML */
      const elementHTML = utils.createDOMFromHTML(generateHTML);
      /*find menu container */
      const menuContainer = document.querySelector(select.containerOf.booksPanel);
      console.log('menuContainer: ', menuContainer);
      /*add element to menu */
      menuContainer.appendChild(elementHTML);
    }
  }
  
  function initActions(){
    const booksList = document.querySelectorAll(select.book.image);  
    //for every element of book image in books-list
    for(const element of booksList){
      
      //add EventListener for every element on double klick
      element.addEventListener('dblclick', function(event){
        //prevent default
        event.preventDefault();
        //get the id of clicked book image
        const bookId = element.getAttribute('data-id');
        
        //add or remove class favorite
        
        if(favoriteBooks.includes(bookId)){
        
          const indexOfBookID = favoriteBooks.indexOf(bookId);
          element.classList.remove('favorite');
          favoriteBooks.splice(indexOfBookID, 1);
        }
        else{

          element.classList.add('favorite');
          favoriteBooks.push(bookId);
        } 

        //add this element to favoriteBooks
        
        
        
        console.log('ID\'s', favoriteBooks);
      });
    }

  }
  render();
  initActions();
}