import { useState } from 'react'

const initialForm = {
  name: '',
  phone: '',
  address: '',
  date: '',
  time: '',
  service: ''
}

export default function Schedule() {
  const [form, setForm] = useState(initialForm)
  const [message, setMessage] = useState('')

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()

    const emptyField = Object.values(form).some((value) => value.trim() === '')

    if (emptyField) {
      setMessage('Preencha todos os campos antes de enviar.')
      return
    }

    setMessage('Agendamento enviado com sucesso! Em breve entraremos em contato.')
    setForm(initialForm)
  }

  return (
    <section className="section schedule" id="agenda">
      <div className="title">
        <span>Agendamento</span>
        <h2>Solicite uma visita</h2>
        <p>Agende medição, orçamento ou instalação.</p>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Nome completo" value={form.name} onChange={handleChange} />
        <input name="phone" placeholder="Telefone / WhatsApp" value={form.phone} onChange={handleChange} />
        <input name="address" placeholder="Endereço" value={form.address} onChange={handleChange} />

        <div className="formRow">
          <input type="date" name="date" value={form.date} onChange={handleChange} />
          <input type="time" name="time" value={form.time} onChange={handleChange} />
        </div>

        <select name="service" value={form.service} onChange={handleChange}>
          <option value="">Selecione o serviço</option>
          <option value="Medição">Medição</option>
          <option value="Orçamento">Orçamento</option>
          <option value="Instalação">Instalação</option>
        </select>

        <button type="submit">Enviar Agendamento</button>
        {message && <p className="message">{message}</p>}
      </form>
    </section>
  )
}
