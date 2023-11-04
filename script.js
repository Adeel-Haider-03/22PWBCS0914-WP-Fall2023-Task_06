const bookList = document.getElementById('book-list');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const clearButton = document.getElementById('clear-button');
const searchButton = document.getElementById('search-button');
const resetButton = document.getElementById('reset-button');

const books = [];

function addBook() {
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const ISBN=document.getElementById('ISBN').value;

    if (title && author && ISBN && !books.some(book => book.title === title && book.author === author &&book.ISBN===ISBN)) {
        books.push({ title, author ,ISBN});
        renderBookList();
    } else {
        alert('Book with the same title and author already exists!');
    }

    // Clear input fields
    document.getElementById('book-title').value = '';
    document.getElementById('book-author').value = '';
    document.getElementById('ISBN').value='';
}
function resetBook(){
    books.length = 0;
    renderBookList();
}
resetButton.addEventListener('click', resetBook);

function renderBookList() {
    bookList.innerHTML = '';
    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author} ISBN: ${book.ISBN}`;
        bookList.appendChild(li);
    });
}

function searchBooks() {
    const query = searchInput.value.toLowerCase();
    const results = books.filter(book => book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query));
    
    searchResults.innerHTML = '';
    results.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author} ISBN: ${book.ISBN}`;
        searchResults.appendChild(li);
    });
}

function clearSearchResults() {
    searchInput.value = '';
    searchResults.innerHTML = '';
}

searchButton.addEventListener('click', searchBooks);
clearButton.addEventListener('click', clearSearchResults);
