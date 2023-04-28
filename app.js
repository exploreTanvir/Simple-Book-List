const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const btn = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (title.value == "" || author.value == "" || year.value == "") {
    alert("Vai kisu akta den !!");
  } else {
    const newRow = document.createElement("tr");
    const newTitle = document.createElement("th");
    const newAuthor = document.createElement("th");
    const newYear = document.createElement("th");
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);
    bookList.appendChild(newRow);
  }
});
