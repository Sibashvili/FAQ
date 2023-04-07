const size = document.querySelectorAll(".question");
const common = document.querySelectorAll(".common");
const photo = document.querySelectorAll(".arrow");

console.log(size);
for (i = 0; i < size.length; i++) {
  size[i].addEventListener("click", function () {
    this.parentElement.classList.toggle("active");
  });
  photo[i].addEventListener("click", function () {
    this.parentElement.classList.toggle("active");
  });
}
