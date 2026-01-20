import { useEffect, useState } from 'react';
import './Hero.css';

import img1 from '../../assets/images/people-working-as-team-company.jpg';
import img2 from '../../assets/images/medium-shot-man-carrying-box.jpg';
import img3 from '../../assets/images/team-software-engineers-doing-brainstorming-office.jpg';
import img4 from '../../assets/images/view-chef-working-kitchen.jpg';
import img5 from '../../assets/images/young-craftsman-building-house.jpg';
import img6 from '../../assets/images/young-hispanic-woman-pharmacist-smiling-confident-standing-with-arms-crossed-gesture-pharmacy.jpg';

const images = [img1, img2, img3, img4, img5, img6];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000); // tempo confortável, institucional

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* Background com fade */}
      <div className="hero__background">
        {images.map((img, index) => (
          <div
            key={index}
            className={`hero__bg-image ${
              index === current ? 'active' : ''
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Conteúdo */}
      <div className="hero__content">
        <h1 className="h1">Contrate com confiança</h1>
        <p className="hero__subtitle">
          Encontre o talento certo com a Prontus Consultoria em RH.
          Processos de recrutamento rápidos, precisos e humanizados.
        </p>

        <p className="hero__highlight">
          Mais que preencher uma vaga, entregamos pessoas que impulsionam resultados.
        </p>

        <a href="#contact" className="btn-primary hero__cta">
          Quero contratar agora
        </a>
      </div>
    </section>
  );
}
