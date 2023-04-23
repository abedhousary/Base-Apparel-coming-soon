let btn = document.querySelector(".go");
let inpt = document.querySelector(".cus-input");
let message = document.querySelector(".message");
let erroric = document.querySelector(".error-icon");
btn.onclick = () => {
    if (!inpt.value.includes("@")){
        message.classList.remove("hide");
        erroric.classList.remove("hide");
        inpt.style.borderColor = "hsl(0, 93%, 68%)";
    }
}