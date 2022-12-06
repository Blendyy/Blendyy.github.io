function hamburgerMenuToggle() {
    var x = document.querySelector(".hamburger_menu_links_wrapper");
    console.log("okokok");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

function skillToggle(event) {
    var skillNumber = event.target.className.slice(-1)
    var skillDescription = document.querySelector(`.skill_${skillNumber}_expanded`)
    if (skillDescription.style.display === "block") {
        skillDescription.style.display = "none";
      } else {
        skillDescription.style.display = "block";
      }
}