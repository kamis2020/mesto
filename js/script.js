const edit = document.querySelector(".profile__info-edit");
let popUp = document.querySelector(".popup");
let popUpClose = popUp.querySelector(".popup__form-close");
let formElement = popUp.querySelector(".popup__form");
let nameInput = formElement.querySelector(".popup__form-name");
let jobInput = formElement.querySelector(".popup__form-about");
let infoName = document.querySelector(".profile__info-title");
let infoAbout = document.querySelector(".profile__info-about");

edit.addEventListener("click", function () {

  nameInput.value = infoName.innerText;
  jobInput.value = infoAbout.innerText;
  popUp.classList.add("popup__active");
  popUpClose.addEventListener("click", function () {
    popUp.classList.remove("popup__active");
  });
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  infoName.textContent = nameInput.value;
  infoAbout.textContent = jobInput.value;  
}

formElement.addEventListener("submit", formSubmitHandler);
