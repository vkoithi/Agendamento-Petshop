const buttonSchedule = document.querySelector("#button-schedule")
const modal = document.querySelector(".modal-overlay")
const closeModal = document.querySelector("#close-modal")
const tutorName = document.querySelector("#tutor-name")

// Abre o Modal
buttonSchedule.addEventListener("click", () => {
    modal.classList.remove("hide")
    
    tutorName.focus()
})

// Fecha o Modal
closeModal.addEventListener("click", () => {
    modal.classList.add("hide")

    buttonSchedule.focus()
})

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.classList.contains("hide")){
        modal.classList.add("hide")
        
        buttonSchedule.focus()
    }    
})

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.add("hide")

        buttonSchedule.focus()
    }
})

