import { useState } from 'react'
import { products } from '../data/products.js'

export default function Catalog() {
  const [filter, setFilter] = useState('Todos')

  const filteredProducts = filter === 'Todos'
    ? products
    : products.filter((product) => product.style === filter || product.room === filter)

  return (
    <section className="section" id="catalogo">
      <div className="title">
        <span>Catálogo</span>
        <h2>Escolha seu papel de parede</h2>
        <p>Filtre por estilo ou ambiente.</p>
      </div>

      <div className="filters">
        {['Todos', 'Luxo', 'Minimalista', 'Natural', 'Moderno', 'Sala', 'Quarto', 'Escritório'].map((item) => (
          <button
            key={item}
            className={filter === item ? 'activeFilter' : ''}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid">
        {filteredProducts.map((product) => (
          <article className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="cardBody">
              <small>{product.style} • {product.room}</small>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button>Ver Detalhes</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
