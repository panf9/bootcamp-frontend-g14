import { useEffect, useState } from "react"

const AppointmentsForm = ({ onSaveAppointment, appointment }) => {

  const INITIAL_FORM_STATE = {
    id:'',
    petName: '',
    petAge: '',
    ownerName: '',
    appointmentDate: '',
    appointmentTime: '',
    symptoms: '',
    color:''
  }

  const COLORS = [
    '#F0B27A',
    '#F4D03F',
    '#58D68D',
    '#52BE80',
    '#45B39D',
    '#48C9B0',
    '#5DADE2',
    '#5499C7',
    '#A569BD',
    '#AF7AC5',
    '#EC7063'
  ]

  const [form, setForm] = useState(INITIAL_FORM_STATE)
  
  useEffect(() => {
    // console.log("Estoy en el useEffect");
    if (Object.keys(appointment).length > 0) {
      setForm(appointment)
    }
  }, [appointment])

  // useEffect(()=>{
  //   console.log('estoy en buton guardar');
  //   const newAppointment = appointment.map( appoint => {
  //     appoint.filter( app => )
  //   })
  // }, [])

  const handleChange = (event) => {
    // const name = event.target.name
    // const value = event.target.value
    const { name, value } = event.target

    const color = COLORS[Math.floor(Math.random()*11)]

    setForm({ ...form, [name]:value, color:color })
  }

  const handleSaveAppointment = (e, appointment) => {
    e.preventDefault()

    console.log(e);

    if (id === appointment.id ) {
      setForm({...form, petName, petAge, ownerName, appointmentDate, appointmentTime, symptoms})
    } else {
      const newAppointment = {
        ...form,
        id: crypto.randomUUID()
      }
  
      onSaveAppointment(newAppointment)
    }

    // const newAppointment = {
    //   ...form,
    //   id: crypto.randomUUID()
    // }

    // onSaveAppointment(newAppointment)
    
    

    setForm(INITIAL_FORM_STATE)
  }

  return (
    <section className="w-96 p-4">
        <h2 className="text-2xl">Nuevo Paciente</h2>

      <form 
        className="flex flex-col gap-3"
        onSubmit={handleSaveAppointment}
      >
        <input 
          type="text"
          name="petName"
          className="border p-2 shadow-md rounded-md"
          placeholder="Nombre de la mascota"
          value={form.petName}
          onChange={handleChange}
        />
        <input 
          type="number"
          name="petAge"
          min="0"
          max="50"
          className="border p-2 shadow-md rounded-md"
          placeholder="Edad de la mascota"
          value={form.petAge}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="ownerName"
          className="border p-2 shadow-md rounded-md"
          placeholder="Dueño de la mascota"
          value={form.ownerName}
          onChange={handleChange}
        />
        <input 
          type="date"
          name="appointmentDate"
          className="border p-2 shadow-md rounded-md"
          placeholder="Fecha de la cita"
          value={form.appointmentDate}
          onChange={handleChange}
        />
        <input 
          type="time"
          name="appointmentTime"
          className="border p-2 shadow-md rounded-md"
          placeholder="Hora de la cita"
          value={form.appointmentTime}
          onChange={handleChange}
        />
        <textarea 
          name="symptoms"
          className="border p-2 shadow-md rounded-md"
          placeholder="Síntomas"
          rows={3}
          value={form.symptoms}
          onChange={handleChange}
        />
        <input 
          className="hidden"
          type="text" 
          name="color"
          value={form.color}
          onChange={handleChange}
        />
        <input 
          className="border p-2 bg-green-800 text-white rounded-md"
          type="submit" 
          value="Guardar"
          onChange={handleChange}
        />
        <input 
          className="hidden"
          type="text" 
          name="color"
          value={form.color}
          onChange={handleChange}
        />
      </form>
    </section>
  )
}

export default AppointmentsForm
