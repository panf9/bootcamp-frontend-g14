import { useState } from "react"

import AppointmentsForm from "../components/appointments/AppointmentsForm"
import AppointmentsList from "../components/appointments/AppointmentsList"

const Appointments = () => {
  const [appointments, setAppointment] = useState([])
  const [appointmentSelected, setAppointmentSelected] = useState({})

  const handleSaveAppointment = (form) => {
    // Crear un filtro para actualizar los datos 
    console.log('El handleeee', form);
    const idFinded = appointments.filter(appointment => appointment === form)
    console.log(idFinded)
    if (idFinded.length > 0) {
      // Agregamos algo vacio para que se modifique
      setAppointment([...appointments, ])
    } else{
      setAppointment([...appointments, form])
    }
    // Receteamos el appointment seleccionado para que nuevamente esté en cero
    setAppointmentSelected({})
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