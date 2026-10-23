import { addAppointment, isTimeOccupied } from "./schedules.js"

const form = document.querySelector(".form")

// Evento para captar o submit do formulário.
form.addEventListener("submit",(event) => {
    event.preventDefault()

     const data = new FormData(form)
     const tutor = data.get("tutor-name")
     const pet = data.get("pet-name")
     const phone = data.get("phone-number")
     const description = data.get("services")
     const date = data.get("schedule")
     const hour = data.get("hour")

     // Verifica se o campo não está vazio e informa o alert.
     if (tutor.trim() === "") {
          alert("Informe o nome do tutor.")
          return 
     }

     if (pet.trim() === "") {
          alert("Informe o nome do pet.")
          return
     }

     if (phone.trim() === "") {
          alert("Informe um número de telefone.")
          return
     }

     const phoneNumbers = phone.replace(/\D/g, "")

     if (phoneNumbers.length !== 10 && phoneNumbers.length !== 11){
          alert("Informe um número válido.")
          return
     }

     if (description.trim() === "") {
          alert("Informe a descrição do serviço")
          return
     }

     if (date.trim() === "") {
          alert("Informe a data do agendamento.")
          return
     }

     if (hour.trim() === "") {
          alert("Informe o horário de agendamento.")
          return
     }

     let period 

     if (hour >= "13:00" && hour <= "18:00") {
          period = "afternoon"
     } else if (hour >= "09:00" && hour <= "12:00") {
          period = "morning"
     } else if (hour >= "19:00" && hour <= "21:00") {
          period = "night"
     } else {
          alert("Informe outro horário.")
          return
     }

      // Verifica se o horário já está ocupado.
    if (isTimeOccupied(date, hour)) {
        alert("Este horário já está ocupado.")
        return
    }

    // Cria o objeto com os dados do agendamento.
    const appointment = {
        tutor,
        pet,
        phone,
        description,
        date,
        hour,
        period
    }

    // Adiciona o agendamento.
    addAppointment(appointment)
})

