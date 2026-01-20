import { useRef, useState, useEffect } from 'react';
import './HowItWorks.css';
import { howItWorksText } from '../../content/text';

export default function HowItWorks() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);

  const cardWidth = 320;

  const updateScrollable = () => {
    if (!trackRef.current) return;
    const { scrollWidth, clientWidth } = trackRef.current;
    setIsScrollable(scrollWidth > clientWidth + 5);
  };

  useEffect(() => {
    updateScrollable();
    const observer = new ResizeObserver(updateScrollable);
    observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = (index) => {
    if (!trackRef.current) return;
    trackRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (!trackRef.current) return;
    const index = Math.round(trackRef.current.scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  return (
    <section id="how" className="how">
      <div className="container how__header">
        <h2 className="h2">{howItWorksText.title}</h2>
        <p className="how__subtitle">{howItWorksText.subtitle}</p>
      </div>

      <div className="how__wrapper">
        {/* Seta esquerda */}
        {isScrollable && activeIndex > 0 && (
          <button
            className="how__arrow left"
            onClick={() => scrollToIndex(activeIndex - 1)}
            aria-label="Anterior"
          >
            ‹
          </button>
        )}

        {/* Trilho */}
        <div
          className="how__track"
          ref={trackRef}
          onScroll={handleScroll}
        >
          {howItWorksText.steps.map((step, index) => (
            <div className="how__card" key={index}>
              <span className="how__number">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        {/* Seta direita */}
        {isScrollable && activeIndex < howItWorksText.steps.length - 1 && (
          <button
            className="how__arrow right"
            onClick={() => scrollToIndex(activeIndex + 1)}
            aria-label="Próximo"
          >
            ›
          </button>
        )}
      </div>

      {/* Indicadores (somente se scrollável e mobile) */}
      {isScrollable && (
        <div className="how__dots">
          {howItWorksText.steps.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
