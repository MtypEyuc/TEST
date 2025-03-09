document.getElementById("submitBtn").addEventListener("click", addBook);

function addBook() {
  let bookName = document.getElementById("bookName").value.trim();
  let authorName = document.getElementById("authorName").value.trim();

  if (!bookName || !authorName) {
    alert("책 이름과 저자를 입력하세요.");
    return;
  }

  let table = document.getElementById("bookList");
  let row = table.insertRow();
  row.insertCell(0).innerText = bookName;
  row.insertCell(1).innerText = authorName;

  let deleteCell = row.insertCell(2);
  let deleteBtn = document.createElement("span");
  deleteBtn.innerText = "X";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    row.remove();
  });
  deleteCell.appendChild(deleteBtn);

  document.getElementById("bookName").value = "";
  document.getElementById("authorName").value = "";

  let message = document.getElementById("message");
  message.style.display = "block";
  setTimeout(() => {
    message.style.display = "none";
  }, 2000);
}
