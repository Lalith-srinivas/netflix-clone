
let learn = document.querySelector(".learnmore");
let learnmore = document.getElementById("learn");
let code = document.querySelector(".signin");
let password = document.querySelector(".pass");
let forget = document.querySelector(".Forget");
let signbtn = document.querySelector(".button");
let signin = document.querySelector(".signin-code");
learn.addEventListener("click", () => {
    learnmore.classList.remove("learn");
    learn.classList.add("learn");
})
code.addEventListener("click", () => {
    code.innerText = "Use Password";
    forget.innerText = "Forget email or phone number?";
    signbtn.innerText = "Send sign-in code";
    signin.classList.remove("signin-code");
    password.classList.add("signin-code");
})
learn.addEventListener("click", () => {
    learnmore.classList.remove("learn");
    learn.classList.add("learn");
});
