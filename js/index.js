var coll = document.getElementsByClassName("collapsable");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    //Add a line of code to remove and add the margin to the parent element when clicked
    if (content.style.display === "block") {
      content.style.display = "none";
      this.style["margin-bottom"] = "1em";
    } else {
      content.style.display = "block";
      this.style["margin-bottom"] = "0";
    }
  });
}