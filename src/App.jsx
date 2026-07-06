import { useMemo, useState } from 'react';
import { Brush, CalendarCheck, CheckCircle, Menu, PlayCircle, ShieldCheck, Sparkles, X } from 'lucide-react';
import { products } from './data/products.js';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <a className="brand" href="#home">
        <span className="brandIcon">⌂</span>
        <span>Site Papel de Parede</span>
      </a>

      <button className="menuButton" onClick={() => setOpen(!open)} aria-label="Abrir menu">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={open ? 'nav open' : 'nav'}>
        <a href="#home">Home</a>
        <a href="#catalogo">Catálogo</a>
        <a href="#oferta">Oferta</a>
        <a href="#videos">Vídeos</a>
        <a href="#agendamento">Agendar</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="heroContent">
        <div className="goldIcon"><Sparkles size={24} /> Qualidade que você vê, beleza que você sente</div>
        <h1>Transforme suas paredes em arte!</h1>
        <p>Um simples detalhe pode mudar completamente o seu espaço com elegância, textura e acabamento premium.</p>
        <div className="heroActions">
          <a className="primaryButton" href="https://wa.me/5511973393322" target="_blank" rel="noreferrer">Aperte o play no WhatsApp</a>
          <a className="secondaryButton" href="#catalogo">Ver estilos</a>
        </div>
      </div>

      <div className="heroCard">
        <div className="qualitySeal">★★★★★<strong>QUALIDADE</strong><span>Premium</span></div>
        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80" alt="Sala elegante com papel de parede" />
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    { icon: <Brush />, title: 'Fácil aplicação', text: 'Aplicação prática com acabamento limpo.' },
    { icon: <ShieldCheck />, title: 'Alta durabilidade', text: 'Materiais resistentes para o dia a dia.' },
    { icon: <Sparkles />, title: 'Variedade de estilos', text: 'Do clássico ao moderno para qualquer ambiente.' }
  ];

  return (
    <section className="benefits">
      {benefits.map((item) => (
        <article className="benefit" key={item.title}>
          <div className="benefitIcon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </section>
  );
}

function Catalog() {
  const [filter, setFilter] = useState('Todos');
  const styles = ['Todos', 'Premium', 'Moderno', 'Clássico', 'Minimalista'];

  const filtered = useMemo(() => {
    return filter === 'Todos' ? products : products.filter((product) => product.style === filter);
  }, [filter]);

  return (
    <section className="section" id="catalogo">
      <div className="sectionTitle">
        <span>Do clássico ao moderno</span>
        <h2>Temos o estilo perfeito para você</h2>
      </div>

      <div className="filters">
        {styles.map((style) => (
          <button className={filter === style ? 'active' : ''} key={style} onClick={() => setFilter(style)}>{style}</button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((product) => (
          <article className="productCard" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div>
              <span>{product.room}</span>
              <h3>{product.title}</h3>
              <p>Rolos a partir de <strong>{product.price}</strong></p>
              <a href="https://wa.me/5511973393322" target="_blank" rel="noreferrer">Ver detalhes</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section className="offer" id="oferta">
      <div className="offerLabel">Oferta especial</div>
      <div>
        <h2>Na compra de 5 rolos, ganhe 1 cola para papel de parede</h2>
        <p>Promoção inspirada no material enviado: visual forte, preto e dourado, com chamada comercial direta.</p>
      </div>
      <div className="priceBox">
        <span>Rolos a partir de</span>
        <strong>R$ 50,00</strong>
        <small>0,53 x 10m</small>
      </div>
    </section>
  );
}

function Videos() {
  return (
    <section className="section dark" id="videos">
      <div className="sectionTitle">
        <span>Aprenda antes de comprar</span>
        <h2>Instalação e manutenção</h2>
      </div>

      <div className="videoGrid">
        <article className="videoCard">
          <div className="videoPlaceholder"><PlayCircle size={58} /></div>
          <h3>Como instalar</h3>
          <ol>
            <li>Limpe e nivele a parede.</li>
            <li>Meça os rolos antes da aplicação.</li>
            <li>Aplique com cuidado para evitar bolhas.</li>
          </ol>
        </article>

        <article className="videoCard">
          <div className="videoPlaceholder"><PlayCircle size={58} /></div>
          <h3>Como conservar</h3>
          <ul>
            <li>Use pano macio levemente úmido.</li>
            <li>Evite produtos abrasivos.</li>
            <li>Mantenha boa ventilação no ambiente.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

function SchedulingForm() {
  const [form, setForm] = useState({ name: '', phone: '', address: '', date: '', time: '', service: '' });
  const [message, setMessage] = useState('');

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function submitForm(event) {
    event.preventDefault();
    const empty = Object.values(form).some((value) => value.trim() === '');

    if (empty) {
      setMessage('Preencha todos os campos para solicitar o agendamento.');
      return;
    }

    setMessage('Agendamento solicitado com sucesso. Nossa equipe entrará em contato pelo WhatsApp.');
    setForm({ name: '', phone: '', address: '', date: '', time: '', service: '' });
  }

  return (
    <section className="section schedule" id="agendamento">
      <div className="sectionTitle">
        <span>Fale com a gente</span>
        <h2>Peça seu orçamento agora</h2>
      </div>

      <form className="form" onSubmit={submitForm}>
        <input name="name" placeholder="Nome completo" value={form.name} onChange={updateField} />
        <input name="phone" placeholder="WhatsApp" value={form.phone} onChange={updateField} />
        <input name="address" placeholder="Endereço do serviço" value={form.address} onChange={updateField} />
        <div className="formRow">
          <input type="date" name="date" value={form.date} onChange={updateField} />
          <input type="time" name="time" value={form.time} onChange={updateField} />
        </div>
        <select name="service" value={form.service} onChange={updateField}>
          <option value="">Tipo de serviço</option>
          <option value="Medição">Medição</option>
          <option value="Orçamento">Orçamento</option>
          <option value="Instalação">Instalação</option>
        </select>
        <button type="submit"><CalendarCheck size={20} /> Solicitar agendamento</button>
        {message && <p className="formMessage">{message}</p>}
      </form>
    </section>
  );
}

function WhatsAppCta() {
  return (
    <section className="whatsappCta">
      <div className="whatsappIcon">▶</div>
      <div>
        <h2>Aperte o play e peça seu orçamento agora!</h2>
        <p>Atendimento rápido pelo WhatsApp.</p>
      </div>
      <a href="https://wa.me/5511973393322" target="_blank" rel="noreferrer">Chamar no WhatsApp</a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>Site Papel de Parede</h3>
        <p>Qualidade que você vê, beleza que você sente.</p>
      </div>
      <div>
        <p><CheckCircle size={18} /> (11) 97339-3322</p>
        <p><CheckCircle size={18} /> (11) 98618-7987</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <Catalog />
      <Offer />
      <Videos />
      <SchedulingForm />
      <WhatsAppCta />
      <Footer />
    </>
  );
}
