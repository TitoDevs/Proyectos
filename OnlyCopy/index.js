document.addEventListener("DOMContentLoaded", function () {
  var menuContainer = document.getElementById("menu-container");
  var btnAddMenu = document.getElementById("btn-add-menu");
  var menuCounter = 1;
  var storedMenus = [];

  btnAddMenu.addEventListener("click", function () {
    var userInput = prompt("Ingresa el título del menú:");
    if (userInput !== null && userInput !== "") {
      var menu = createMenu(userInput);
      document.getElementById("menu-container").appendChild(menu);
      menuCounter++;
      storedMenus.push({
        title: userInput,
        items: [],
      });
      updateStoredMenus();
    }
  });

  function createMenu(title) {
    var menu = document.createElement("div");
    menu.className = "accordion-menu";
    menu.id = "menu-" + menuCounter;
    menu.draggable = true; // Hacer que el menú sea arrastrable

    var menuItem = document.createElement("div");
    menuItem.className = "accordion-item";

    // Evento dragstart para iniciar el arrastre del menú
    menu.addEventListener("dragstart", function (event) {
      event.dataTransfer.setData("text/plain", menu.id);
      menu.classList.add("dragging");
    });

    // Evento dragend para finalizar el arrastre del menú
    menu.addEventListener("dragend", function () {
      menu.classList.remove("dragging");
    });

    var titleDiv = document.createElement("div");
    titleDiv.className = "accordion-title";
    var textDiv = document.createElement("p");
    textDiv.className = "accordion-text";
    textDiv.textContent = title;
    titleDiv.appendChild(textDiv);

    var contentDiv = document.createElement("div");
    contentDiv.className = "accordion-content";

    var list = createList();

    contentDiv.appendChild(list);

    var addBtn = document.createElement("button");
    addBtn.className = "fas fa-plus btn-add-2";
    addBtn.addEventListener("click", function () {
      var userInput = prompt("Ingresa el título del elemento:");
      if (userInput !== null && userInput !== "") {
        var listItem = createListItem(userInput, title);
        list.appendChild(listItem);

        var menuIndex = getMenuIndexByTitle(title);
        if (menuIndex !== -1) {
          storedMenus[menuIndex].items.push(userInput);
          updateStoredMenus();
        }
      }
    });

    contentDiv.appendChild(addBtn);

    var collapseIcon = document.createElement("i");
    collapseIcon.className = "fas fa-chevron-down btn-collapse";

    var titleIcons = document.createElement("div");
    titleIcons.className = "title-icons";

    var editMenuIcon = document.createElement("i");
    editMenuIcon.className = "fas fa-edit btn-edit";
    editMenuIcon.addEventListener("click", function (event) {
      event.stopPropagation();
      var newTitle = prompt("Ingresa el nuevo título del menú:", title);
      if (newTitle !== null && newTitle !== "") {
        title = newTitle;
        textDiv.textContent = newTitle;
        updateStoredMenus();
      }
    });

    var deleteMenuIcon = document.createElement("i");
    deleteMenuIcon.className = "fas fa-trash-alt btn-delete";
    deleteMenuIcon.addEventListener("click", function (event) {
      event.stopPropagation();
      var confirmDelete = confirm("¿Estás seguro de eliminar este menú?");
      if (confirmDelete) {
        menu.remove();
        var menuIndex = getMenuIndexByTitle(title);
        if (menuIndex !== -1) {
          storedMenus.splice(menuIndex, 1);
          updateStoredMenus();
        }
      }
    });

    titleIcons.appendChild(editMenuIcon);
    titleIcons.appendChild(deleteMenuIcon);
    titleIcons.appendChild(collapseIcon);
    titleDiv.appendChild(titleIcons);

    menuItem.appendChild(titleDiv);
    menuItem.appendChild(contentDiv);
    menu.appendChild(menuItem);

    var isCollapsed = false;

    collapseIcon.addEventListener("click", function () {
      contentDiv.classList.toggle("active");
      if (isCollapsed) {
        collapseIcon.className = "fas fa-chevron-down btn-collapse";
        isCollapsed = false;
      } else {
        collapseIcon.className = "fas fa-chevron-up btn-collapse";
        isCollapsed = true;
      }
    });

    return menu;
  }

  menuContainer.addEventListener("dragover", function (event) {
    event.preventDefault();
    var draggingElement = document.querySelector(".accordion-menu.dragging");
    var targetElement = event.target.closest(".accordion-menu");
    if (targetElement && targetElement !== draggingElement) {
      var targetRect = targetElement.getBoundingClientRect();
      var targetCenterY = targetRect.top + targetRect.height / 2;
      var mousePosY = event.clientY;
      var isDraggingOverTop = mousePosY < targetCenterY;

      var prevElement = targetElement.previousElementSibling;
      var nextElement = targetElement.nextElementSibling;

      if (isDraggingOverTop) {
        targetElement.parentNode.insertBefore(draggingElement, targetElement);
      } else {
        targetElement.parentNode.insertBefore(draggingElement, nextElement);
      }

      // Actualizar el orden de los menús en el almacenamiento
      var menuIds = Array.from(menuContainer.querySelectorAll(".accordion-menu")).map(function (menu) {
        return menu.id;
      });
      storedMenus.sort(function (a, b) {
        return menuIds.indexOf(a.title) - menuIds.indexOf(b.title);
      });
      updateStoredMenus();
    }
  });

  function createList() {
    var list = document.createElement("ul");
    list.className = "sub-menu";
    return list;
  }

  function createListItem(title, menuTitle) {
    var listItem = document.createElement("li");
    var listItemLink = document.createElement("p");
    listItemLink.className = "list-item-text";
    listItemLink.textContent = title;
    listItemLink.addEventListener("click", function () {
      copyToClipboard(listItemLink.textContent);
    });
    listItem.appendChild(listItemLink);

    var listItemIcons = document.createElement("div");
    listItemIcons.className = "list-item-icons";

    var editIcon = document.createElement("i");
    editIcon.className = "fas fa-edit btn-edit";
    editIcon.addEventListener("click", function () {
      var newTitle = prompt(
        "Ingresa el nuevo título del elemento:",
        title
      );
      title = newTitle;
      if (newTitle !== null && newTitle !== "") {
        listItemLink.textContent = newTitle;
        updateStoredMenus();
      }
    });

    var deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash-alt btn-delete";
    deleteIcon.addEventListener("click", function () {
      var confirmDelete = confirm(
        "¿Estás seguro de eliminar este elemento?"
      );
      if (confirmDelete) {
        listItem.remove();
        var menuIndex = getMenuIndexByTitle(menuTitle);
        if (menuIndex !== -1) {
          storedMenus[menuIndex].items.splice(
            storedMenus[menuIndex].items.indexOf(title),
            1
          );
          updateStoredMenus();
        }
      }
    });

    listItemIcons.appendChild(editIcon);
    listItemIcons.appendChild(deleteIcon);

    listItem.appendChild(listItemIcons);

    return listItem;
  }

  function copyToClipboard(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  function updateStoredMenus() {
    var storedMenusData = [];
    var menus = document.getElementsByClassName("accordion-menu");
    for (var i = 0; i < menus.length; i++) {
      var menu = menus[i];
      var menuTitle = menu.querySelector(".accordion-title .accordion-text")
        .textContent;
      var menuItems = menu.querySelectorAll(".sub-menu li");
      var menuItemsData = [];
      for (var j = 0; j < menuItems.length; j++) {
        menuItemsData.push(menuItems[j].querySelector(".list-item-text")
          .textContent);
      }
      storedMenusData.push({ title: menuTitle, items: menuItemsData });
    }
    localStorage.setItem("menus", JSON.stringify(storedMenusData));
  }

  function getMenuIndexByTitle(title) {
    for (var i = 0; i < storedMenus.length; i++) {
      if (storedMenus[i].title === title) {
        return i;
      }
    }
    return -1;
  }

  // Restaurar los menús almacenados al cargar la página
  function restoreMenus() {
    var storedMenusJSON = localStorage.getItem("menus");
    if (storedMenusJSON) {
      storedMenus = JSON.parse(storedMenusJSON);
      storedMenus.forEach(function (menuData) {
        var menu = createMenu(menuData.title);
        menuContainer.appendChild(menu);
        menuData.items.forEach(function (item) {
          var listItem = createListItem(item, menuData.title);
          menu.querySelector(".sub-menu").appendChild(listItem);
        });
      });
    }
  }

  restoreMenus();
});
