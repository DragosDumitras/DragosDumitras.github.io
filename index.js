var activePage = "home";

// utilities functions

function hide(id) {
  console.info("hide %o element", id);
  document.getElementById(id).style.display = "none";
}

function hideAllPages() {
  hide("home");
  hide("skills");
  hide("languages");
  hide("projects");
}

function showPage(id) {
  hide(activePage);
  var page = document.getElementById(id);
  console.info("show %o", id, page);
  page.style.display = "block";
  activePage = id;
}

// start our code

showPage(activePage);
