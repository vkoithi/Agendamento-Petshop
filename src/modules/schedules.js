
const appointments = []

// Seleciona o calendário principal.
const selectedDate = document.querySelector("#date")

// Atualiza os agendamentos quando a data é alterada.
selectedDate.addEventListener("change", () => {
    updateSchedules()
})

// Atualiza os agendamentos exibidos na tela.
function updateSchedules() {
    const periodMorning = document.querySelector("#period-morning")
    const periodAfternoon = document.querySelector("#period-afternoon")
    const periodNight = document.querySelector("#period-night")

    // Limpa as listas.
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    // Filtra os agendamentos pela data selecionada.
    const filteredAppointments = appointments.filter((appointment) => {
        return appointment.date === selectedDate.value
    })

    // Renderiza os agendamentos encontrados.
    filteredAppointments.forEach((appointment) => {
        renderAppointment(appointment)
    })

    console.log(filteredAppointments)
}

// Cria os elementos HTML do agendamento.
export function renderAppointment(appointment) {
    const scheduleList = document.querySelector(`#period-${appointment.period}`)
    const scheduleItem = document.createElement("li")

    // Horário.
    const scheduleHour = document.createElement("strong")
    scheduleHour.textContent = appointment.hour
    scheduleHour.classList.add("schedule-hour")
    scheduleItem.appendChild(scheduleHour)

    // Cliente.
    const scheduleClient = document.createElement("span")
    scheduleClient.classList.add("schedule-client")

    // Nome do pet.
    const namePet = document.createElement("strong")
    namePet.textContent = appointment.pet
    scheduleClient.appendChild(namePet)

    // Nome do tutor.
    const nameTutor = document.createTextNode(` / ${appointment.tutor}`)
    scheduleClient.appendChild(nameTutor)

    scheduleItem.appendChild(scheduleClient)

    // Descrição do serviço.
    const scheduleService = document.createElement("span")
    scheduleService.classList.add("schedule-service")
    scheduleService.textContent = appointment.description
    scheduleItem.appendChild(scheduleService)

    // Botão remover.
    const removeButton = document.createElement("button")
    removeButton.setAttribute("type", "button")
    removeButton.classList.add("remove-button")
    removeButton.textContent = "Remover agendamento"
    scheduleItem.appendChild(removeButton)

    // Remove o agendamento do array e da tela.
    removeButton.addEventListener("click", () => {
        const index = appointments.indexOf(appointment)

        if (index !== -1) {
            appointments.splice(index, 1)
            scheduleItem.remove()
        }
    })

    // Adiciona o agendamento à lista do período.
    scheduleList.appendChild(scheduleItem)
}

// Cadastra um novo agendamento.
export function addAppointment(appointment) {
    appointments.push(appointment)
    updateSchedules()
}

// Verifica se o horário já está ocupado.
export function isTimeOccupied(date, hour) {
    return appointments.some((appointment) => {
        return appointment.date === date && appointment.hour === hour
    })
}

// Define a data atual no calendário principal.
const today = new Date()

const year = today.getFullYear()
const month = today.getMonth() + 1
const day = today.getDate()

const formattedMonth = String(month).padStart(2, "0")
const formattedDay = String(day).padStart(2, "0")

const result = `${year}-${formattedMonth}-${formattedDay}`

selectedDate.value = result

// Inicializa a agenda.
updateSchedules()
