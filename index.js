const containerEl = document.querySelector(".container")

const btnEl = document.querySelector(".btn")

const popupContainerEl = document.querySelector(".popup-container")

const closeBtnEl = document.querySelector(".close-btn")

btnEl.addEventListener("click",()=>{
containerEl.classList.add("active");
popupContainerEl.classList.remove("active")
})

closeBtnEl.addEventListener("click",()=>{
popupContainerEl.classList.add("active")
containerEl.classList.remove("active")
})