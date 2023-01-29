// nav bar
let list = document.querySelector(".list");
let icon = document.querySelector(".icon i");
let lis = document.querySelector(".list").querySelectorAll("li");
let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".progress span");

lis.forEach((li) => {
  li.addEventListener("click", function () {
    lis.forEach((ele) => {
      ele.classList.remove("active");
      this.classList.add("active");
    });
  });
});

icon.addEventListener("click", function () {
  list.classList.toggle("active");
});

// Sub nav bar
let subNav = document.querySelector(".sub-nav");
window.onscroll = function () {
  if (this.scrollY >= 350) {
    subNav.classList.add("show");
  } else {
    subNav.classList.remove("show");
  }

  if (this.scrollY >= section.offsetTop - 500) {
    spans.forEach((span) => {
      span.classList.add("open");
    });
  } else {
    spans.forEach((span) => {
      span.classList.remove("open");
    });
  }
};

// skill progress

// let section = document.querySelector(".skills");
// let spans = document.querySelectorAll(".progress span");
// console.log(spans);

// window.onscroll = function () {
//   if (this.scrollY >= section.offsetTop - 500) {
//     spans.forEach((span) => {
//       console.log("reached");
//       span.style.width = span.dataset.width;
//     });
//   }
// };
