
const AppointmentsList = ({ appointments, onRemove, onEdit}) => {
  if (appointments.length === 0){
    return (
      <section className="w-96 bg-slate-200 p-4">
        <h2 className="text-2xl text-center mb-4">No hay citas</h2>
      </section>
    )
  }
  
  return (
    <section className="w-1/2 p-4 bg-white rounded-lg">
      <h2 className="text-2xl text-center mb-4">Listado de Pacientes</h2>
      <ul>
        {appointments.map(appointment => {
          // console.log(appointment);
          return (
          // <li key={appointment.petName} style={{background: appointment.color}}
          <div
          key={appointment.id}
          style={{background: appointment.color}}
          className="border-2 border-sky-500 p-3  mt-3 rounded-lg flex justify-between"
        >
          <div>
            <h4 className="font-semibold text-lg">Mascota</h4>
            
            <div>
              <strong>Nombre:</strong> {appointment.petName}
            </div>

            <div>
              <strong>Edad (años):</strong> {appointment.petAge}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg">Dueño</h4>

            <div>
              <strong>Nombre:</strong> {appointment.ownerName}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg">Citas</h4>

            <div>
              <strong>Fecha:</strong> {appointment.appointmentDate}
            </div>
            <div>
              <strong>Hora:</strong> {appointment.appointmentTime}
            </div>
            <div>
              <strong>Sintomas:</strong> {appointment.symptoms}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href="#"
              className="p-2 bg-green-600 text-white rounded-lg cursor-pointer"
            >
              Confirmar cita
            </a>
            <button
              className="p-2 bg-sky-600 text-white rounded-lg cursor-pointer"
              onClick={() => onEdit(appointment)}
            >
              Editar
            </button>
            <button
              className="p-2 bg-red-600 text-white rounded-lg cursor-pointer"
              onClick={() => onRemove(appointment.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
          )
        })}
        {/* {JSON.stringify(appointments)} */}
      </ul>  
    </section>
  )
}

export default AppointmentsList
