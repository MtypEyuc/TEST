document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.querySelector(".menu");
  const buttons = document.querySelectorAll(".buttons button");

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      renderMenu(data);
    });

  function renderMenu(items) {
    menuContainer.innerHTML = "";
    items.forEach((item) => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menu-item");
      menuItem.setAttribute("data-category", item.category);
      menuItem.innerHTML = `
                <img src="img/${item.image}" alt="${item.name}">
                <div>
                    <h4>${item.name}</h4>
                    <p>${item.discription}</p>
                </div>
            `;
      menuContainer.appendChild(menuItem);
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const category = event.target.getAttribute("data-category");
      buttons.forEach((btn) => btn.classList.remove("active"));
      event.target.classList.add("active");

      fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
          const filteredData =
            category === "all"
              ? data
              : data.filter((item) => item.category === category);
          renderMenu(filteredData);
        });
    });
  });
});
