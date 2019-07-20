let loadBooks = document.getElementById('loadBooks');
loadBooks.addEventListener('click', getBooks);

let send = document.getElementById('send');
send.addEventListener('click', function (ev) {
    ev.preventDefault();
    add();
});

let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');
let isbnInput = document.getElementById('isbn');

let tbody = document.getElementsByTagName('tbody')[0];
tbody.innerHTML = '';

let username = 'guest';
let password = 'guest';
let authString = `${username}:${password}`;
let headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(authString));

function getBooks() {
    tbody.innerHTML = '';
    fetch(`https://baas.kinvey.com/appdata/kid_r1etXAaZB/books`,
        {method: 'GET', headers: headers})
        .then(handler)
        .then(data => {
            for (let obj in data) {
                let book = data[obj];
                let tr = document.createElement('tr');

                let tdAuthor = document.createElement('td');
                let tdTitle = document.createElement('td');
                let tdISBN = document.createElement('td');
                let tdAction = document.createElement('td');

                tdAuthor.textContent += book.author;
                tdTitle.textContent += book.title;
                tdISBN.textContent += book.isbn;

                tr.appendChild(tdAuthor);
                tr.appendChild(tdTitle);
                tr.appendChild(tdISBN);

                let editButton = document.createElement('button');
                let deleteButton = document.createElement('button');

                editButton.textContent = 'Edit';
                deleteButton.textContent = 'Delete';

                tdAction.appendChild(editButton);
                tdAction.appendChild(deleteButton);

                tr.appendChild(tdAction);
                tbody.appendChild(tr);

                editButton.addEventListener('click', function () {
                    editBook(book._id);
                });

                deleteButton.addEventListener('click', function () {
                    deleteBooks(book._id, tr);
                });
            }
        });
}

function deleteBooks(id, tr) {
    let username = 'guest';
    let password = 'guest';
    let authString = `${username}:${password}`;
    let headers = new Headers({"Content-Type": "application/json"});
    headers.set('Authorization', 'Basic ' + btoa(authString));

    fetch(`https://baas.kinvey.com/appdata/kid_r1etXAaZB/books/${id}`, {
        method: 'DELETE', headers: headers
    })
        .then(handler)
        .then(data => {
            tbody.removeChild(tr);
        })
}

function editBook(id) {
    let username = 'guest';
    let password = 'guest';
    let authString = `${username}:${password}`;
    let headers = new Headers({"Content-Type": "application/json"});
    headers.set('Authorization', 'Basic ' + btoa(authString));

    let newTitle = titleInput.value;
    let newAuthor = authorInput.value;
    let newIsbn = isbnInput.value;


    let body = {title: newTitle, author: newAuthor, isbn: newIsbn};

    fetch(`https://baas.kinvey.com/appdata/kid_r1etXAaZB/books/${id}`, {
        method: 'PUT', headers: headers,
        body: JSON.stringify(body)
    })
        .then(handler)
        .then(data => {
            parent.getElementsByTagName('td')[0].textContent = newTitle;
            parent.getElementsByTagName('td')[1].textContent = newAuthor;
            parent.getElementsByTagName('td')[2].textContent = newIsbn;


        });

    clearInput();

}

function add(tr) {
    let username = 'guest';
    let password = 'guest';
    let authString = `${username}:${password}`;
    let headers = new Headers({"Content-Type": "application/json"});
    headers.set('Authorization', 'Basic ' + btoa(authString));

    let title = titleInput.value;
    let author = authorInput.value;
    let isbn = isbnInput.value;

    if (title && author && isbn) {
        let body = {isbn: isbn, author: author, title: title};
        fetch(`https://baas.kinvey.com/appdata/kid_r1etXAaZB/books`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)

        })
            .then(handler)
            .then(response => {
                if (response) {
                    tbody.appendChild(tr);
                }
            })

    }

    clearInput();
    getBooks();

}

function handler(response) {
    if (response.status >= 400) {
        throw new Error(`Something went wrong. Error: ${response.statusText}`)
    }

    return response.json();
}

function clearInput() {
    titleInput.value = '';
    authorInput.value =  '';
    isbnInput.value = '';
}
