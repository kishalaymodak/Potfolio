const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");
const op = document.getElementById("options");
menuIcon.addEventListener("click", function (e) {
  menuIcon.setAttribute("class", "hidden");
  op.setAttribute("class", "flex flex-col gap-5 mr-5");
  menu.setAttribute(
    "class",
    "nav-sections flex flex-col gap-5 items-start justify-start py-2 w-full md:w-screen px-3"
  );
});
