const nameInput = document.getElementById("name");
const submitBtn = document.getElementById("submit");

const nameInputHandler = (ev) => {
  ev.preventDefault();
  console.log(nameInput.innerText);
  console.log(ev.target.value);
};

submitBtn.addEventListener("click", nameInputHandler);
