
const hidden = document.querySelector(".hidden");
const lines = document.querySelectorAll("span");
document.querySelector(".menu").addEventListener("click", clickHandler)
function clickHandler() {
    hidden.classList.toggle("expose");
    document.querySelector("span:nth-child(1)").classList.toggle("change")
    document.querySelector("span:nth-child(2)").classList.toggle("change")
    document.querySelector("span:nth-child(3)").classList.toggle("change")
}
  