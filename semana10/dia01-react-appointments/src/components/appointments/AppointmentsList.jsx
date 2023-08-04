
const AppointmentsList = ({ appointments}) => {
  
  return (
    <section className="w-96 bg-slate-200 p-4">
      <h2 className="text-2xl text-center mb-4">Listado de Pacientes</h2>
      <ul>
        {appointments.map(appointment => {
          return (
          <li key={appointment.petName} style={{background: appointment.color}}
            className="mt-2 rounded-md p-2 border-2  text-center" 
          >
            <span >Mascota: <strong className="text-xl">{appointment.petName}</strong></span>
            <div className="flex justify-around my-2">
              <div><strong>Edad:</strong> {appointment.petAge}</div>
              <div><strong>Dueño:</strong> {appointment.ownerName}</div>
            </div>
            <div className="flex justify-around my-2">
              <div><strong>Fecha:</strong> {appointment.appointmentDate}</div>
              <div><strong>Hora:</strong> {appointment.appointmentTime}</div>
            </div>
            <p><strong>Síntomas:</strong> {appointment.symptoms}</p>
          </li>
          )
        })}
        {/* {JSON.stringify(appointments)} */}
      </ul>  
    </section>
  )
}

export default AppointmentsList
