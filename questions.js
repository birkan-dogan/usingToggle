const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
    question.style.transition = "all 1s";
  });
});

/* toggle is used for adding a class name to elements. When we click the className's question-btn button the "show-text" className will be added its parent's parent and property of "show-text" already been declared in CSS */
