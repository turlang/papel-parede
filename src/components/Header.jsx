import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <a className="logo" href="#home">Papel & Arte</a>

      <button className="menu" onClick={() => setOpen(!open)} aria-label="Abrir menu">
        ☰
      </button>

      <nav className={open ? 'nav open' : 'nav'}>
        <a href="#home">Home</a>
        <a href="#catalogo">Catálogo</a>
        <a href="#videos">Vídeos</a>
        <a href="#agenda">Agendamento</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  )
}
