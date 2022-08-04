const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");
let selected_data = null;


selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    data = selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");

  });
});