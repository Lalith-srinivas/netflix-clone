let cannot = document.querySelector(".para-text");
let update = document.querySelector(".update");
let change = document.querySelector(".text");
let hide = document.querySelector(".radio");
let first = document.querySelector(".first");
let mail = document.querySelector(".mail");
let firstName = document.querySelector(".first-name");
firstName.classList.add("hide");
let lastName = document.querySelector(".last-name");
lastName.classList.add("hide");
let card = document.querySelector(".card-number");
let button = document.querySelector(".design");
let cancel = document.querySelector(".cancel-design");
button.classList.add("hide");
card.classList.add("hide");
cannot.addEventListener("click", () => {
    update.innerText = "Forgot Email/Password";
    change.innerText = "Please provide this information to help us find your account (all fields required):";
    hide.classList.add("hide");
    cannot.classList.add("hide");
    first.classList.add("hide");
    mail.classList.add("hide");
    firstName.classList.remove("hide");
    lastName.classList.remove("hide");
    card.classList.remove("hide");
    button.classList.remove("hide");
});
cancel.addEventListener("click", () => {
    update.innerText = "Update password, email or phone";
    change.innerText = "How would you like to reset your password?";
    hide.classList.remove("hide");
    cannot.classList.remove("hide");
    first.classList.remove("hide");
    mail.classList.remove("hide");
    firstName.classList.add("hide");
    lastName.classList.add("hide");
    card.classList.add("hide");
    button.classList.add("hide");
})