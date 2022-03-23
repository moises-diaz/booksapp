
// PROGRAMMER: Moises Diaz


window.onload = () => 
{
  // Using Object Oriented Programming in Web Development
  // Representing the book in a class
  class Book {
    constructor(title, author, isbn) 
    {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
  }
  // Responsible for UI changes
  class UI 
  {
    // Adding Books to UI
    static addBookToList(book) 
    {
      const list = document.getElementById("book-list");
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
      list.appendChild(row);
    }
    // Removing the input fields
    static clearInputFields() 
    {
      document.getElementById("title").value = "";
      document.getElementById("author").value = "";
      document.getElementById("isbn").value = "";
    }
    // Removing the books
    static removeBook(el) 
    {
      if (el.classList.contains("delete")) {
        el.parentNode.parentNode.remove();
      }
    }
    // Showing Alerts
    static showAlert(message, className) 
    {
      const div = document.createElement("div");
      div.className = `alert alert-${className}`;
      div.innerHTML = message;
      const container = document.querySelector(".container");
      const form = document.getElementById("book-form");
      container.insertBefore(div, form);
      // Removing alerts in 3 seconds
      setTimeout(() => div.remove(), 3000);
    }
  }
  // submitting the form
  document.getElementById("book-form").addEventListener("submit", e => 
  {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;
    // Checking that if the input fields contains text or not
    if (title == "" || author == "" || isbn == "") 
    {
      UI.showAlert("Please fill all the fields", "danger");
    } else {
      const book = new Book(title, author, isbn);
      // Adding Books to table
      UI.addBookToList(book);
      UI.showAlert("Book Added", "success");
      // Clear Input Fields
      UI.clearInputFields();
    }
  });
  // Deleting the books
  document.getElementById("book-list").addEventListener("click", e => 
  {
    // removing book from table
    UI.removeBook(e.target);
    // Showing alert
    UI.showAlert("Book Removed", "success");
  });
};
