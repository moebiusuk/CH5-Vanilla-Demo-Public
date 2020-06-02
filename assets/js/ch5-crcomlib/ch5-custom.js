var mainPage = document.getElementById("page-main");

//Go to Home page
var buttonHomeCH5 = document.getElementById("button-home-ch5");
var buttonHomeBootstrap = document.getElementById("button-home-bootstrap");
var pageHome = document.getElementById("page-home");
buttonHomeCH5.addEventListener("click", function () {
  mainPage.setActiveViewChild(pageHome);
});
buttonHomeBootstrap.addEventListener("click", function () {
  mainPage.setActiveViewChild(pageHome);
});

//Go to CH5 Page
var buttonCH5 = document.getElementById("button-ch5");
var pageCH5 = document.getElementById("page-ch5");
buttonCH5.addEventListener("click", function () {
  mainPage.setActiveViewChild(pageCH5);
});

//Go to Bootstrap Page
var buttonBootstrap = document.getElementById("button-bootstrap");
var pageBootstrap = document.getElementById("page-bootstrap");
buttonBootstrap.addEventListener("click", function () {
  mainPage.setActiveViewChild(pageBootstrap);
});
