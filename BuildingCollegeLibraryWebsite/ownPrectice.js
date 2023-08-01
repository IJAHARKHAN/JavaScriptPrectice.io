// console.log('Hello Own my prectice!');
// alert('Hello Own my prectice!');

// Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

/// Display Constructor
function Display() {

}

// Add methods to display protypes
Display.prototype.add = function (book) {
    let tableBody = document.getElementById('tableBody');
    let uistring = `<tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uistring;

    //   console.log(tbodyString);
}


// Form Validate
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

/// Show message after submit form
Display.prototype.show = function (msgType, msgContent) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${msgType} alert-dismissible fade show" role="alert">
                                <strong>Messge:</strong> ${msgContent}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = '';
    }, 2000);
}

// Clear Fields
Display.prototype.clear = function () {
    let libreryForm = document.getElementById('libraryForm');
    libreryForm.reset();
}



// Add submit event listener to libraryForm
let libreryForm = document.getElementById('libraryForm');
libreryForm.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(e) {
    // console.log('Your form has been submitted successfully!');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    // console.log(book);


    let display = new Display();
    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book is submitted successfully!');
    } else {
        display.show('danger', 'Sorry you can not add this book!');
    }



    e.preventDefault();
}
