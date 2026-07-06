export default function Videos() {
  return (
    <section className="section dark" id="videos">
      <div className="title">
        <span>Vídeos educativos</span>
        <h2>Instalação e manutenção</h2>
        <p>Espaços prontos para incorporar seus vídeos do YouTube.</p>
      </div>

      <div className="videoGrid">
        <article className="videoCard">
          <div className="videoBox">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Como instalar papel de parede"
              allowFullScreen
            />
          </div>
          <h3>Como instalar</h3>
          <ol>
            <li>Limpe e nivele a parede.</li>
            <li>Meça a área antes do corte.</li>
            <li>Aplique com calma usando espátula.</li>
            <li>Finalize retirando bolhas de ar.</li>
          </ol>
        </article>

        <article className="videoCard">
          <div className="videoBox">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Como conservar papel de parede"
              allowFullScreen
            />
          </div>
          <h3>Como fazer manutenção</h3>
          <ul>
            <li>Use pano macio e seco.</li>
            <li>Evite produtos abrasivos.</li>
            <li>Não esfregue com força.</li>
            <li>Mantenha o ambiente ventilado.</li>
          </ul>
        </article>
      </div>
    </section>
  )
}
