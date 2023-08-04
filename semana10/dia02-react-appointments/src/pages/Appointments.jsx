import { useState } from "react"

import AppointmentsForm from "../components/appointments/AppointmentsForm"
import AppointmentsList from "../components/appointments/AppointmentsList"

const Appointments = () => {
  const [appointments, setAppointment] = useState([])
  const [appointmentSelected, setAppointmentSelected] = useState({})

  const handleSaveAppointment = (form) => {
    setAppointment([...appointments, form])
  }

  const handleRemove = (id) => {
    console.log(id)
    const newAppointment = appointments.filter(
      appointment => appointment.id !== id
    )

    setAppointment(newAppointment)
  }

  const handleEdit = (appointment) => {
    setAppointmentSelected(appointment)

  }

  return (
    <>
        <AppointmentsForm 
          onSaveAppointment={handleSaveAppointment}
          appointment={appointmentSelected}
        />

      <AppointmentsList 
        appointments={appointments}
        onRemove={handleRemove}
        onEdit={handleEdit}
      />
    </>
  )
}

export default Appointments